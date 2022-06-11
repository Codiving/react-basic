import { useEffect } from "react";

const Lifecycle1 = () => {
  useEffect(() => {
    console.log("마운트");

    return () => {
      console.log("언마운트");
    };
  }, []);

  return <div>리액트 컴포넌트</div>;
};

export default Lifecycle1;
