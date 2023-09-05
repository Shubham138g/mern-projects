import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import ToDoModel from './Models/ToDo.js';
// const ToDoModel= require('./Models/ToDo')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const MONGO_URL = `mongodb+srv://tonygupta275:zoAcRqDwTeldGSC2@cluster0.6efrmtj.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL)

app.get('/get',(req,res)=>{
    ToDoModel.find()
    .then( result => res.json(result))
    .catch( err=> res.json(err)) 
})

app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    ToDoModel.findByIdAndUpdate({_id:id},{done:true})
    .then( result => res.json(result))
    .catch( err=> res.json(err))  
})

app.delete('/delete/:id',(req,res)=>{
    const {id} =req.params;
    ToDoModel.findByIdAndDelete({_id:id})
    .then( result => res.json(result))
    .catch( err=> res.json(err))  
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    ToDoModel.create({
        task: task
    }).then(result => res.json(result))
        .catch(err => res.json(err))
})
app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
})