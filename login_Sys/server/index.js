import express from 'express';
import cors from 'cors';
import conn from './database/db.js';
import dotenv from 'dotenv';
import UserModel from './models/User.js'
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';

const app = express();
dotenv.config();
const PORTs = process.env.PORT;
conn();//database connection function calling

const salt = bcrypt.genSaltSync(10);


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new UserModel({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        await newUser.save();
        res.json(newUser);

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'server error' });
    }
})

app.post('/login',async (req, res) => {
    try {
        const { username, password } = req.body;

        const findUser =await  UserModel.findOne({ username });
        if (!findUser) {
            res.status(400).json({ message: 'user not found' });
        }
        
        
        const passwordMatch= await bcrypt.compareSync(password,findUser.password);
        if(!passwordMatch){
            res.status(400).json({message:"invalid password"});
        }

       return res.status(200).json({message:"login successfull"});

    } catch (error) {

        console.log(error);
        res.status(500).json({message:'server error in login section'});

    }

})


app.listen(PORTs, () => {
    console.log(`server is runnig on port number ${PORTs}`);
})