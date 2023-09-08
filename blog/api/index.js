import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// const User=require('./models/User')
import UserModel from './models/User.js';

const MONGO_URL = `mongodb+srv://tonygupta275:zoAcRqDwTeldGSC2@cluster0.6efrmtj.mongodb.net/blog?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL);

const app = express();

app.use(cors());
app.use(express.json());



app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await UserModel.create({ username, password });
        res.json(userDoc);

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen("4000", () => {
    console.log("server is running");
})