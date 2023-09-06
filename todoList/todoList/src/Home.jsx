import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import ToDoModel from "../../Server/Models/ToDo";
import Checkbox from "@mui/material/Checkbox";
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit=(id)=>{
   axios.put("http://localhost:3001/update/"+id)
    .then(result => location.reload())
    .catch(err => console.log(err));
  }

  const handleDelete=(id)=>{
    axios.delete("http://localhost:3001/delete/"+id)
    .then(result => location.reload())
    .catch(err => console.log(err));
  }
  return (
    <>
      <div className="home">
        <h2 className="todo_title">ToDoList</h2>
        <Create />
        {todos.length === 0 ? (
          <div className="">
            <h2 style={{color:"red"}}>No Records</h2>
          </div>
        ) : (
          todos.map((todo) => (
            <div className="task ">
              <div className="checkbox " onClick={()=>handleEdit(todo._id)}>
                {
                  todo.done
                   ?
                   <CheckBoxIcon className="completd_icon checkbox_margin"/>
                   :
                   <CheckBoxOutlineBlankIcon className="tick" />
  
                }
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span> <DeleteOutlineIcon className="delete_icon" onClick={()=>handleDelete(todo._id)} /></span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
