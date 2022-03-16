import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <h1>Test Eric</h1>
      <div id="heading">
        <Tab />
        <Tab />
        <Tab />
      </div>
      <div id="main">
        <p>test Shit</p>
      </div>
    </div>
  );
}

export default App;
