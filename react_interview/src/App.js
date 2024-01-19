import logo from "./logo.svg";
import "./App.css";
import { memo, useState } from "react";

import PureComponent from "./Component/PureComponent";
// const componentPure = memo(PureComponent);

function App() {
  const [lname, setLname] = useState("test");

  return (
    <div className="App">
      <div>{lname}</div>
      <button
        onClick={() => {
          setLname("hero" + Date.now());
        }}
      >
        click
      </button>
      <PureComponent name={"rahul"} />
    </div>
  );
}

export default App;
