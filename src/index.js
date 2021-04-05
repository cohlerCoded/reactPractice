// Import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component

const App = () => {
  return <div>Hello World</div>;
};

// Show react component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
