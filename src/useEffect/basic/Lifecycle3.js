import { useEffect } from "react";

const Lifecycle3 = () => {
  useEffect(() => {
    console.log("마운트");

    return () => {
      console.log("언마운트");
    };
  }, []);

  return <div>{console.log("출력")}리액트 컴포넌트</div>;
};

export default Lifecycle3;
