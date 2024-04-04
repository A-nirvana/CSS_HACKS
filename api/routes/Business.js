import express from 'express';
import authenticateJwt from '../middleware/auth.js';
import {Business, Ngo} from '../db/index.js'
import SECRET from '../middleware/auth.js';
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
    const { username, password } = req.body;
    const user = await Business.findOne({ username });
    if (user) {
        res.status(403).json({ message: 'Business already exists' });
    } else {
        const newBusiness = new Business({ username, password });
        await newBusiness.save();
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Business registered successfully', token });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.headers;
    const user = await Business.findOne({ username, password });
    if (user) {
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
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

