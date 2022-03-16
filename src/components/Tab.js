import { useState } from "react";
import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { getByPlaceholderText, render } from "@testing-library/react";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const Tab = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [active, setActive] = useState(false);

  const colorActive = {
    backgroundColor: "black",
    color: "white",
  };
  const colorPassive = {
    backgroundColor: "white",
    color: "black",
  };

  const flipColor = () => {
    setActive(!active);
  };

  return (
    <div
      onMouseEnter={flipColor}
      onMouseLeave={flipColor}
      className="tab"
      style={active ? colorActive : colorPassive}
    >
      <h3>{props.title}</h3>
      <h3>{props.content}</h3>
    </div>
  );
};

export default Tab;
