import ObjectType from "./state/ObjectType";
import Rendered from "./state/Rendered";
import Unrendered from "./state/Unrendered";

const App = () => {
  return (
    <>
      <Rendered />
      <Unrendered />
      <ObjectType />
    </>
  );
};

export default App;
