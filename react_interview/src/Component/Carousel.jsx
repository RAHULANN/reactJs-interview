import React, { useEffect, useState } from "react";
import { data } from "./data";
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
    }, 1000);
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
          style={{
            color: "red",
            fontSize: "30px",
            display: "grid",
            // gap: "50px",
            gridTemplateColumns: "1fr 1fr",
            // gridColumn: "revert",
            // gridRowEnd
          }}
        >
          {/* {data[current]} */}
          {current % 2 == 0 ? (
            <>
              <img src={data[current]?.img} alt="" />
              <div> {data[current]?.text}</div>
            </>
          ) : (
            <>
              <div> {data[current]?.text}</div>
              <img src={data[current]?.img} alt="" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
