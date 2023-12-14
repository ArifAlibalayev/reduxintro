import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus } from "../../Slices/CalculatorSlice";

function Calculator() {
  const CalculatorFunc = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [firstnum, setFirstnum] = useState("");
  const [secondnum, setSecondnum] = useState("");
console.log(CalculatorFunc);

  function handleInput(e) {
    const searchString = e.target.value;
    setFirstnum(searchString);

  }

  function handleInput2(e) {
    const searchString = e.target.value;
    setSecondnum(searchString);

  }

  return (
    <div>
        <h3>Enter your first numbe: </h3>
        <input type="text" value={firstnum} onChange={handleInput}/>

        <h3>Enter your second number: </h3>
        <input type="text" value={secondnum} onChange={handleInput2}/>
        <button onClick={()=>dispatch(Plus(firstnum,secondnum))}>+</button>
        <button>-</button>
        <button>/</button>
        <button>*</button>
        
    </div>
  );
}

export default Calculator;
