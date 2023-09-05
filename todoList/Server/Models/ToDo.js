import mongoose from "mongoose";

const TodoSchema= new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const ToDoModel=  mongoose.model("todo",TodoSchema);

// module.exports=ToDoModel;
export default ToDoModel;