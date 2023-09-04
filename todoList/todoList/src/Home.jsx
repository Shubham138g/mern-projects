import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import ToDoModel from "../../Server/Models/ToDo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/get")
    .then(result =>setTodos(result.data))
    .catch(err => console.log(err))
  });

  
  return (
    <>
      <div className="home">
        <h2>ToDoList</h2>
        <Create />
        {todos.length === 0 
        ? 
          <div className="task">
            <h2>No Records</h2>
          </div>
         : 
          todos.map(todo => {
            <div className="task">{todo.task}</div>
          })
        }
      </div>
    </>
  );
};

export default Home;
