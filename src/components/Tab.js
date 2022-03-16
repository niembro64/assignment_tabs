import { useState } from "react";
import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { render } from "@testing-library/react";

const Tab = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);

  const colorStyle = {
    backgroundColor: "grey",
  };

  const flipColor = () => {
      setActive(!active);
  }

  return (
    <div
      onMouseEnter={flipColor}
      onMouseLeave={flipColor}
      className="tab"
      style={colorStyle}
    >
      {active ? "YES" : "NO"}
    </div>
  );
};

export default Tab;
