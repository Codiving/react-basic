import { useState } from "react";
import { containerCSS } from "./common";

let renderCount = 0;

const Unrendered = () => {
  renderCount += 1;
  let [count, setCount] = useState(0);

  const onChangeCount = () => {
    count = count + 1;
    console.log(count);
  };

  const onReset = () => {
    count = 0;
    renderCount = 0;
  };

  return (
    <div style={containerCSS}>
      <p>setCount를 이용하지 않은 state 변경</p>
      <button onClick={onChangeCount}>count 증가</button>
      <button onClick={onReset}>count, render count 초기화</button>
      <p>count : {count}</p>
      <p>render count : {renderCount}</p>
    </div>
  );
};

export default Unrendered;
