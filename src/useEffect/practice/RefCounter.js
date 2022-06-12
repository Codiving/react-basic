import { useEffect, useRef } from "react";

const RefCounter = () => {
  const countRef = useRef(0);

  console.log("렌더링");

  useEffect(() => {
    const countTimer = setInterval(() => (countRef.current += 1), 1000);

    return () => clearInterval(countTimer);
  }, []);

  return (
    <button onClick={() => console.log(countRef.current)}>값 확인해보기</button>
  );
};

export default RefCounter;
