import React from "react";
import "./App.scss";

function Greeting() {
  return <h1>Hello, world!</h1>;
}

function App() {
  return (
    <div className="container">
      <div className="grid">
        <div className="grid-item">Item 1</div>
        <div className="grid-item">Item 2</div>
        <div className="grid-item">Item 3</div>
        <div className="grid-item">Item 4</div>
        <div className="grid-item">Item 5</div>
        <div className="grid-item">Item 6</div>
      </div>
    </div>
  );
}

export default App;
