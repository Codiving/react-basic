import { useState } from "react";

let renderCount = 0;

const Controlled = () => {
  renderCount += 1;
  const [value, setValue] = useState("");

  console.log(renderCount);

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => console.log(value)}>값 확인</button>
    </>
  );
};

export default Controlled;
