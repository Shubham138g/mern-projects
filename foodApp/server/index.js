import express from 'express';
import conn from '../server/db.js';
import createuser from '../server/Routes/createUser.js'

const app=express();
const port=4000;
conn();

app.use(express.json());


app.use('/api',createuser )

app.get("/",(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`server is running on port no. 4000`);
})