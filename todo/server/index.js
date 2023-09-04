import express from 'express';
import Connection from './database/db.js';


const app =express();
const PORT=5000;

Connection();

app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`);
})