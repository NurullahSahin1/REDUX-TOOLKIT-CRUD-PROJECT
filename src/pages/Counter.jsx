import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.counterReducer);
  return (
    <div className="vh-100 w-full d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center gap-4 align-items-center">
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Azalt
        </button>
        <span>{store.count}</span>
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Artır
        </button>
        <input
          type="number"
          className="w-25"
          onChange={(e) => dispatch(setCount(Number(e.target.value)))}
        />
      </div>
    </div>
  );
};

export default Counter;
