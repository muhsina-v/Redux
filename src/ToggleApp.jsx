import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./redux/toggleSlice";

import React from "react";

function ToggleApp() {
  const isblack = useSelector((state) => state.toggle.isblack);
  const dispatch = useDispatch();
  return (
    <>
      <div>toggleApp</div>

      <button onClick={() => dispatch(toggle())}>
        {isblack ? "red" : "green"}butt
      </button>
    </>
  );
  
}

export default ToggleApp;
