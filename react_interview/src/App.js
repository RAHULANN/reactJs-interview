import logo from "./logo.svg";
import "./App.css";
import { memo, useState } from "react";

import PureComponent from "./Component/PureComponent";
import Carousel from "./Component/Carousel";
import SplineAnimationComponent from "./Component/Ani";
import PrintNumIn1Sec from "./Component/PrintNumIn1Sec";
import MapFunction from "./Component/MapFunction";
import FIlterFun from "./Component/FIlterFun";
import ActiveLink from "./Component/activeLink";
// const componentPure = memo(PureComponent);

function App() {
  const [lname, setLname] = useState("first state");

  return (
    <div className="App">
      {/* <div> Main Component state ==:{lname}</div>
      <button
        style={{
          width: "200px",
          height: "40px",
        }}
        onClick={() => {
          setLname("hero" + Date.now());
        }}
      >
        click
      </button> */}
      {/* <PureComponent name={lname} /> */}
      {/* <Carousel /> */}
      {/* <SplineAnimationComponent /> */}

      <ActiveLink />

      <PrintNumIn1Sec />
      <MapFunction />
      <FIlterFun />
    </div>
  );
}

export default App;
