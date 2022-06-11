import { useEffect, useState } from "react";

const Lifecycle4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("# count", count);
    if (!(count % 2)) return;
    console.log("DB 데이터 추가 !!!");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>버튼</button>
    </div>
  );
};

export default Lifecycle4;
