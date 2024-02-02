import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const SplineAnimationComponent = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/RZ0yJBNu3GEO2oj2/scene.splinecode");

    // Cleanup function to dispose resources if necessary
    return () => {
      app.dispose(); // Dispose resources when component unmounts
    };
  }, []); // Empty dependency array to run this effect only once after the component mounts

  return <canvas id="canvas3d" />;
};

export default SplineAnimationComponent;
