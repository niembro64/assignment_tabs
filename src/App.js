import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Tab from "./components/Tab";

function App() {
  const [group, setGroup] = useState([
    { title: "t0", content: "c0" },
    { title: "t1", content: "c1" },
    { title: "t2", content: "c2" },
    { title: "t3", content: "c3" },
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
