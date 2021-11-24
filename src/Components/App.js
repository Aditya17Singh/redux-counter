import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, steps } from "../actions/increment";

const App = () => {
  const myState = useSelector((state) => state.changeNumber.initialState);
  const mState = useSelector((state) => state.changeNumber.number);
console.log(mState);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <div>
          <span onClick={() => dispatch(decNumber())}>-</span>
          <input name="quantity" value={myState} />
          <span onClick={() => dispatch(incNumber())}>+</span>
        </div>
      </div>
      <div>
        <h2>Steps</h2>
        <div>
          <button onClick={(event) => dispatch(steps(event))}>5</button>
          <button>10</button>
          <button>15</button>
        </div>
        <span>-</span>
        <input value={mState} />
        <span onClick={() => dispatch(steps())}>+</span>
      </div>
    </>
  );
};

export default App;
