import Controlled from "./ref/Controlled";
import Focus from "./ref/Focus";
import Uncontrolled from "./ref/Uncontrolled";

const App = () => {
  return (
    <>
      <div>
        <Focus />
        <br />
      </div>
      <hr />
      <div style={{ marginTop: 100 }}>
        <div>
          <Controlled />
        </div>
        <div style={{ marginTop: 50 }}>
          <Uncontrolled />
        </div>
      </div>
    </>
  );
};

export default App;
