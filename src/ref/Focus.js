import { useRef } from "react";

const Focus = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  return (
    <>
      <div>
        <input ref={inputRef} />
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          input 포커싱
        </button>
      </div>
      <div tabIndex={-1} ref={divRef} id="refBox">
        임의 공간
      </div>
      <button
        onClick={() => {
          divRef.current.focus();
        }}
      >
        임의 공간 포커싱
      </button>
    </>
  );
};

export default Focus;
