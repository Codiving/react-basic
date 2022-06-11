import { useState } from "react";

const Lifecycle8 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          const nextCount = count + 1;

          setCount(nextCount);

          if (nextCount % 2) {
            console.log("DB 데이터 추가 !!!");
          }
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default Lifecycle8;
