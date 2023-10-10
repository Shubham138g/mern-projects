import express from 'express';
import cors from 'cors';
import conn from './database/db.js';
import dotenv from 'dotenv';
import UserModel from './models/User.js'
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cookie from 'cookie';

const app = express();
dotenv.config();
const PORTs = process.env.PORT;
conn();//database connection function calling

const salt = bcrypt.genSaltSync(10);//bcryptjs 
const secret = 'efeinfefiw23724y@^Gc7dny7v@^';//jwt secret key


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        // console.log(req.body.username);
        // console.log(req.body.password);
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


//login route

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const findUser = await UserModel.findOne({ username });
        if (!findUser) {
            
          return  res.status(400).json({ message: 'user not found' });
        }


        const passwordMatch = await bcrypt.compareSync(password, findUser.password);
        if (!passwordMatch) {
      
          return  res.status(400).json({ message: "invalid password" });
        }

        const token = jwt.sign({ findUser: findUser._id }, secret);

        res.cookie('token', token, 
        // { httpOnly: true }
        ); 

         res.status(200).json({ token});

        // return res.status(200).json({ message: "login successfull" });

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: 'server error in login section' });

    }
})

///////////////
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.userId = decoded.findUser;
        next();
    });


    
};
///////////////////////
app.get('/protected-route', verifyToken, (req, res) => {
    // Access granted since the token is valid
    res.json({ message: 'Access granted', userId: req.userId });
});

// app.post("/logout",(req,res)=>{
//     res.clearCookie('token');
//     res.status(200).json({message:'logout success'})
// })


app.listen(PORTs, () => {
    console.log(`server is runnig on port number ${PORTs}`);
})