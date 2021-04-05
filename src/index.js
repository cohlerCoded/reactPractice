// Import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component

const App = () => {
  return (
    <div>
      <label for="name" class="label">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style="background-color: blue; color: white">Submit</button>
    </div>
  );
};

// Show react component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
