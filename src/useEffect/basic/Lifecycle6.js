import { useEffect, useState } from "react";

const Lifecycle6 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("setting");
    return () => console.log("clean up");
  });

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>버튼</button>
    </div>
  );
};

export default Lifecycle6;
