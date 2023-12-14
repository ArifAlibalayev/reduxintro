import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToDo, DeleteFromToDo } from "../../Slices/TodoSlice";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const ToDoList = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inpvalue, setInpvalue] = useState("");

  function handleInput(e) {
    const searchString = e.target.value;
    setInpvalue(searchString);
  }

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" value={inpvalue} onChange={handleInput} />
      <button
        onClick={() => dispatch(AddToDo({ value: inpvalue, id: uuidv4() }))}
      >
        add to list
      </button>
      {ToDoList.map((x) => (
          <div className="card" key={x.id}>
            <h1>{x.value}</h1>
            <h3>{x.id}</h3>
            <button onClick={()=>dispatch(DeleteFromToDo(x.id))}>X</button>
          </div>
      ))}
    </div>
  );
}

export default Todo;
