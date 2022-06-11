import { useEffect } from "react";

const delayFunction = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("서버 데이터");
    }, 1000);
  });
};

const Lifecycle9 = () => {
  useEffect(async () => {
    const result = await delayFunction();
    console.log("result", result);
  }, []);

  return <div></div>;
};

export default Lifecycle9;
