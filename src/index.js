// Import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

const labelTxt = () => "Enter Name: ";
// Create react component
const App = () => {
  const btnTxt = { text: "Obj can't be React Child" };
  return (
    <div>
      <label for="name" className="label">
        {labelTxt()}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {btnTxt.text}
      </button>
    </div>
  );
};

// Show react component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
