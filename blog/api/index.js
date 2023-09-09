import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserModel from './models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();

const salt = bcrypt.genSaltSync(10); //bycryptjs
const secret = 'rgrffbfbfbfb232832cy28h7327t574233424cg@#ege#'; //jwt secret key

const MONGO_URL = `mongodb+srv://tonygupta275:zoAcRqDwTeldGSC2@cluster0.6efrmtj.mongodb.net/blog?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL);


app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());



app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await UserModel.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);

    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await UserModel.findOne({ username });
    const passOK = bcrypt.compareSync(password, userDoc.password);

    if (passOK) {
        //logged in
        jwt.sign({ username, id:userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token',token).json('ok');
        })
    }
    else {
        res.status(400).send("wrong credentional");
    }
})

app.get('/profile',(req,res)=>{
    const {token} =req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err;
        res.json(info);
    });
    res.json(req.cookies);
})

app.listen("4000", () => {
    console.log("server is running");
})