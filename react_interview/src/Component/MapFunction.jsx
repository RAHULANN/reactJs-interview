import React, { useEffect } from "react";

export default function MapFunction() {
  Array.prototype.mymap = function (callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
      resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
  };

  useEffect(() => {
    let res = [0, 0, 0, 0, 0, 0].mymap((el, i) => el + 3 * i);
    console.log(res);
  }, []);
  return <div>MapFunction</div>;
}
