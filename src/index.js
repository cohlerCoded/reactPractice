// Import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const getButtonText = () => "Click on Me";
const App = () => {
  // const btnTxt = "Click Me";
  return (
    <div>
      <label for="name" className="label">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {/* {btnTxt} */}
        {getButtonText()}
      </button>
    </div>
  );
};

// Show react component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
