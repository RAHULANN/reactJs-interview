import React, { useEffect } from "react";

export default function PrintNumIn1Sec() {
  useEffect(() => {
    const num = 10;
    for (var i = 1; i <= num; i++) {
      printNumber(i, num);
    }
  }, []);

  const printNumber = (i, num) => {
    setTimeout(() => {
      console.log(num - i);
    }, 1000 * i);
  };
  return <div>PrintNumIn1Sec</div>;
}
