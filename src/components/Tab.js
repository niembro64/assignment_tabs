import { useState } from "react";
import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { render } from "@testing-library/react";

const Tab = (props) => {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);

  const colorStyle = {
    backgroundColor: "grey",
  };

  return (
    <div className="tab" style={colorStyle}>
      {active ? "YES" : "NO"}
    </div>
  );
};

export default Tab;
