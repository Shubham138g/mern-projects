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
import { userInfo } from 'os';
import { log } from 'console';
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
app.use('/uploads', express.static(__dirname + '/uploads'));



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
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const { title, summary, content } = req.body;
        const postDoc = await PostModel.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(postDoc);
    });
});

app.put('/post', uploadMiddleware.single('file'), async(req, res) => {

    let newPath = null;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;
    // jwt.verify(token, secret, {}, async (err, info) => {

    //     if (err) throw err;
    //     const {id, title, summary, content } = req.body;
    //     const postDoc= await PostModel.findById(id);
    //     const isAuthor= JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    //     res.json({isAuthor});

    //     if(!isAuthor){
    //         return res.status(400).json('you are not the author');
    //     }

    //   await  postDoc.updateOne({
    //         title,
    //         summary,
    //         content,
    //         cover:newPath? newPath:postDoc.cover,
    //     });   
    //     res.json(postDoc);
    // });

    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) {
            return res.status(401).json("Invalid token"); // Handle invalid token
        }
    
        const { id, title, summary, content } = req.body;
    
        try {
            const post = await PostModel.findById(id);
            console.log(post);
            if (!post) {
                return res.status(404).json("Post not found");
            }
    
            const isAuthor = JSON.stringify(post.author) === JSON.stringify(info.id);

            if (!isAuthor) {
                return res.status(400).json("You are not the author of this post");
            }
    
            // Define the update object with the fields to be updated
            const update = {
                title,
                summary,
                content,
                cover: newPath ? newPath : post.cover,
            };
    
            // Use the update method to update the post
            const updatedPost = await PostModel.updateOne({ _id: id }, update);
    
    
            console.log(updatedPost);
    
            if (updatedPost.modifiedCount === 1) {
                // The update was successful
                // Fetch the updated post document
                const updatedPostDoc = await PostModel.findById(id);
                res.json(updatedPostDoc);
            } else {
                return res.status(500).json("Failed to update post");
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });
});


app.get('/post', async (req, res) => {
    res.json(await PostModel.find()
        .populate('author', ['username'])
        .sort({ createdAt: -1 })
        .limit(20)
    );
})

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await PostModel.findById(id).populate('author', ['username']);
    res.json(postDoc);

})


//listen 
app.listen("4000", () => {
    console.log("server is running");
})