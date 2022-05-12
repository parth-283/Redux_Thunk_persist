import React from "react";
import "./App.css";
import AddList from "./Component/AddList";
import Counter from "./Component/Counter";

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <AddList/>
    </div>
  );
}

export default App;
