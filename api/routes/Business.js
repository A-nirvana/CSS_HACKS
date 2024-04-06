import express from 'express';
import authenticateJwt from '../middleware/auth.js';
import {Business, Ngo} from '../db/index.js'
import {SECRET} from '../middleware/auth.js';
const router = express.Router();
import jwt from 'jsonwebtoken';
import cors from 'cors';


router.use(express.json());
router.use(cors());

router.get("/", async (req, res) => {
    const businesses = await Business.find({});
    res.json({ businesses});
});


router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const user = await Business.findOne({ email });
    if (user) {
        res.status(403).json({ message: 'Business already exists' });
    } else {
        const newBusiness = new Business(req.body);
        await newBusiness.save();
        const token = jwt.sign({ email, password }, SECRET, { expiresIn: '30d' });
        res.json({ message: 'Business registered successfully', token });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.headers;
    const user = await Business.findOne({ email, password });
    if (user) {
        const token = jwt.sign({ email }, SECRET, { expiresIn: '30d' });
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'Invalid username or password' });
    }
});

router.get('/:name', async(req,res)=>{
    const business = await Business.findById(req.params.name);
    res.json({business});
})

export {router};

