import express from 'express';
import conn from '../server/db.js';
import createuser from '../server/Routes/createUser.js';
import displayData from '../server/Routes/DisplayData.js';
import cors from 'cors';

const app=express();
const port=4000;
conn();

app.use(express.json());
app.use(cors());


app.use('/api',createuser )
app.use('/api',displayData )

app.get("/",(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`server is running on port no. 4000`);
})