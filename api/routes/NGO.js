import express from 'express';
import authenticateJwt from '../middleware/auth.js';
import {Ngo, Business} from '../db/index.js'
import {SECRET} from '../middleware/auth.js';
const router = express.Router();
import jwt from 'jsonwebtoken';
import cors from 'cors';


router.use(express.json());
router.use(cors());

router.get('/', async (req, res)=>{
    const Ngos = await Ngo.find({});
    res.json({Ngos})
})


router.post('/signup', async (req, res) => {
    const { email } = req.body;
    const user = await Ngo.findOne({ email });
    if (user) {
        res.status(403).json({ message: 'Organization already exists' });
    } else {
        const newBusiness = new Ngo(req.body);
        await newBusiness.save();
        const token = jwt.sign({ email }, SECRET, { expiresIn: '30d' });
        res.json({ message: 'Organization registered successfully', token });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.headers;
    const user = await Ngo.findOne({ email, password });
    if (user) {
        const token = jwt.sign({ email }, SECRET, { expiresIn: '30d' });
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'Invalid username or password' });
    }
});

router.get('/:uid', async(req,res)=>{
    const ngo = await Ngo.findById(req.params.uid);
    res.json({ngo});
})

export {router};