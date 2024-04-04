import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/config.js';
import connectDatabase from './utils/connectDatabase.js';
import path from 'path';
const __dirname = path.resolve();
dotenv.config({
    path: __dirname.replace("build", ".env"),
  });

import {router  as BusinessRouter} from './routes/Business.js';
import {router as NgoRouter} from './routes/NGO.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/business',BusinessRouter);
app.use('/ngo',NgoRouter)

app.get("/", (req, res) => res.json({msg: "hello world"}));

connectDatabase(config.db)// Connect to MongoDB

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });