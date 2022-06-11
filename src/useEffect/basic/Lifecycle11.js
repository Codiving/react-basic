import { useEffect, useState } from "react";

const Lifecycle11 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("호출");
    if (count1 % 2) {
      console.log("count 1 DB 추가");
    }

    if (count2 % 2) {
      console.log("count 2 DB 추가");
    }
  }, [count1, count2]);

  return (
    <div>
      <button onClick={() => setCount1(prev => prev + 1)}>count1 증가</button>
      <button onClick={() => setCount2(prev => prev + 1)}>count2 증가</button>
    </div>
  );
};

export default Lifecycle11;
