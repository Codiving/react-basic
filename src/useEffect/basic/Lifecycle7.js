import { useEffect } from "react";

const Lifecycle7 = () => {
  useEffect(() => {
    console.log(1);
  }, []);

  useEffect(() => {
    console.log(2);
  }, []);

  useEffect(() => {
    console.log(3);
  }, []);

  return <div></div>;
};

export default Lifecycle7;
