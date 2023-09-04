import mongoose from "mongoose";

const TodoSchema= new mongoose.Schema({
    task:String
})

const ToDoModel=  mongoose.model("todo",TodoSchema);

// module.exports=ToDoModel;
export default ToDoModel;