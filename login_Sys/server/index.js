import express from 'express';
import cors from 'cors';
import conn from './database/db.js';
import dotenv from 'dotenv';
import UserModel from './models/User.js'
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
const PORTs = process.env.PORT;
conn();//database connection function calling


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post("/register", async(req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new UserModel({
            username,
            password,
        });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'server error' });
    }

})


app.listen(PORTs, () => {
    console.log(`server is runnig on port number ${PORTs}`);
})