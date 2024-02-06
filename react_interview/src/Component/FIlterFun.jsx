import React, { useEffect } from "react";

export default function FIlterFun() {
  Array.prototype.myFilter = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        arr.push(this[i]);
      }
    }
    return arr;
  };

  useEffect(() => {
    let arr = [0, 0, 0, 2, 3, 4].myFilter(function (el) {
      if (el > 2) {
        return true;
      }
      return false;
    });
    console.log(arr);
  }, []);
  return <div>FIlterFun</div>;
}
