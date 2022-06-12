import CountTimer from "./useEffect/practice/CountTimer";
import RefCounter from "./useEffect/practice/RefCounter";
import Resize from "./useEffect/practice/Resize";

const style = {
  marginBottom: 50,
  padding: 10,
  border: "1px solid"
};

const Components = [<Resize />, <CountTimer />, <RefCounter />];

const App = () => {
  return (
    <>
      {Components.map((Component, index) => (
        <div key={index} style={style}>
          {Component}
        </div>
      ))}
    </>
  );
};

export default App;
