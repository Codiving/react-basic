import { useRef } from "react";

let renderCount = 0;

const Uncontrolled = () => {
  renderCount += 1;
  const inputRef = useRef(null);

  console.log(renderCount);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>
        값 확인
      </button>
    </>
  );
};

export default Uncontrolled;
