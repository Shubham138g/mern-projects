import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserModel from './models/User.js';
import PostModel from './models/Post.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import fs from 'fs';
import { dirname } from 'path';
const __dirname = dirname('uploads')


const uploadMiddleware = multer({ dest: 'uploads/' });

const app = express();

const salt = bcrypt.genSaltSync(10); //bycryptjs
const secret = 'rgrffbfbfbfb232832cy28h7327t574233424cg@#ege#'; //jwt secret key

const MONGO_URL = `mongodb+srv://tonygupta275:zoAcRqDwTeldGSC2@cluster0.6efrmtj.mongodb.net/blog?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL);


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(__dirname));
app.use('/uploads',express.static(__dirname +'/uploads'));



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
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        })
    }
    else {
        res.status(400).send("wrong credentional");
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
    res.json(req.cookies);
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json("ok")
})

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {

    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {},async (err, info) => {
        if (err) throw err;
        const { title, summary, content } = req.body;
        const postDoc= await PostModel.create({
            title,
            summary,
            content,
            cover: newPath,
            author:info.id,
        });
        res.json(postDoc);
        
    });


  
});


app.get('/post',async(req,res)=>{
    res.json(await PostModel.find()
    .populate('author',['username'])
    .sort({createdAt:-1})
    .limit(20)
    );
})


//listen 
app.listen("4000", () => {
    console.log("server is running");
})