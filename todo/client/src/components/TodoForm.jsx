import React, { useState } from "react";

const TodoForm = () => {
  const [text, settext] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const onInputChange = (e) => {
    settext(e.target.value);
   
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          placeholder="Enter your todo..."
          className="input"
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default TodoForm;
