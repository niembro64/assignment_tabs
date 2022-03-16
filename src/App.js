import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Tab from "./components/Tab";

function App() {
  const [group, setGroup] = useState([
    { title: "t0", content: "Ciao" },
    { title: "t1", content: "Sup" },
    { title: "t2", content: "Hello There" },
    { title: "t3", content: "Hola" },
  ]);
  const [bottom, setBottom] = useState("");

  const onHover = (content) => {
    // console.log(content);
    setBottom(content);
  };

  return (
    <div className="App">
      <h1>Tabs Assignment</h1>
      <div id="heading">
        {group.map((item, i) => {
          return (
            <div
              key={i}
              className="tab"
              onMouseEnter={(e) => {
                onHover(item.content);
              }}
            >
              <Tab key={i} title={item.title} content={item.content} />
            </div>
          );
        })}
      </div>
      <div id="main">
        <p>{bottom}</p>
      </div>
    </div>
  );
}

export default App;
