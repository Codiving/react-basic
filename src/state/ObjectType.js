import { useState } from "react";
import { containerCSS } from "./common";

let renderCount = 0;

const ObjectType = () => {
  renderCount += 1;

  let [arr, setArr] = useState([1, 2, 3]);
  let [obj, setObj] = useState({ a: 1 });

  const onChangeArrUnrendered = () => {
    arr.push(arr.length + 1);
    setArr(arr);
    console.log(arr);
  };

  const onChangeObjUnrendered = () => {
    obj.a = obj.a + 1;
    setObj(obj);
    console.log(obj);
  };

  const onChangeArrRendered = () => {
    const newArr = [...arr, arr.length + 1];
    setArr(newArr);
    console.log(arr, newArr);
  };

  const onChangeObjRendered = () => {
    const newObj = { a: obj.a + 1 };
    setObj(newObj);
    console.log(obj, newObj);
  };

  return (
    <div style={containerCSS}>
      <p>object type state 변경</p>
      <p>렌더링 X</p>
      <button onClick={onChangeArrUnrendered}>arr 변경</button>
      <button onClick={onChangeObjUnrendered}>obj 변경</button>
      <br />
      <br />
      <p>렌더링 O</p>
      <button onClick={onChangeArrRendered}>arr 변경</button>
      <button onClick={onChangeObjRendered}>obj 변경</button>
      <br />
      <br />
      <p>arr : {JSON.stringify(arr, null, 2)}</p>
      <p>obj : {JSON.stringify(obj, null, 2)}</p>
      <p>renderCount : {renderCount}</p>
    </div>
  );
};

export default ObjectType;
