import { useEffect, useState } from "react";

const CountTimer = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("count 1 호출");
    const countTimer = setInterval(() => setCount1(count1 + 1), 1000);
    return () => clearInterval(countTimer);
  }, [count1]);

  useEffect(() => {
    console.log("count 2 호출");
    const countTimer = setInterval(() => setCount2(prev => prev + 1), 1000);
    return () => clearInterval(countTimer);
  }, []);

  return (
    <div>
      <div>{count1}</div>
      <div>{count2}</div>
    </div>
  );
};

export default CountTimer;
