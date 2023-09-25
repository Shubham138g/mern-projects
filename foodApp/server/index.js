import express from 'express';
import conn from '../server/db.js';

const app=express();
const port=4000;
conn();



app.get("/",(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`server is running on port no. 4000`);
})