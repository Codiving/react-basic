import { useEffect, useState } from "react";

const Component = () => {
  useEffect(() => {
    console.log("마운트");

    return () => {
      console.log("언마운트");
    };
  }, []);

  return <div>리액트 컴포넌트</div>;
};

const Lifecycle2 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && <Component />}
      <br />
      <button onClick={() => setVisible(prev => !prev)}>
        {visible ? "언마운트 시키기" : "마운트 시키기"}
      </button>
    </>
  );
};

export default Lifecycle2;
