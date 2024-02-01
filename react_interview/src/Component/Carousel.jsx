import React, { useEffect, useState } from "react";
import { data } from "./data";
import "./cr.css";
export default function Carousel() {
  const [current, setCurrent] = useState(0);

  //   const [data, setData] = useState([0, 1, 2, 3]);
  useEffect(() => {
    let inter = setInterval(() => {
      if (current == 3) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 2000);
    return () => clearInterval(inter);
  }, [current]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "500px",
          height: "300px",
        }}
      >
        <div
          // className="box"
          style={{
            color: "red",
            fontSize: "30px",

            // gridColumn: "revert",
            // gridRowEnd
          }}
        >
          {/* {data[current]} */}
          {current % 2 == 0 ? (
            <div
              className="box"
              style={{
                display: "grid",
                // gap: "50px",
                gridTemplateColumns: "1fr 1fr",
                transition: "ease-in-out",
                // transitionDelay: "1s",
                transitionDuration: "2s",
              }}
            >
              <img src={data[current]?.img} alt="" />
              <div> {data[current]?.text}</div>
            </div>
          ) : (
            <div
              className="box"
              style={{
                display: "grid",
                // gap: "50px",
                gridTemplateColumns: "1fr 1fr",
                transition: "ease-in-out",
                // transitionDelay: "1s",
                transitionDuration: "1s",
              }}
            >
              <div> {data[current]?.text}</div>
              <img src={data[current]?.img} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
