import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../actions/index";

function Counter() {
  const data = useSelector((state) => state.changeTheNmuber);
  const dispatch = useDispatch();
  console.log("myState", data);

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <button onClick={() => dispatch(incNumber(1,data[0]+1))}>+</button>
        <lable className="fs-2">{data[0]}</lable>
        <button onClick={() => dispatch(decNumber(1,data[0]-1))}>-</button>
        <div>
          <lable className="fs-2">{data[1]}</lable>
        </div>
      </div>
    </div>
  );
}

export default Counter;
