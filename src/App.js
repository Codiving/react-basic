import Lifecycle1 from "./useEffect/basic/Lifecycle1";
import Lifecycle10 from "./useEffect/basic/Lifecycle10";
import Lifecycle11 from "./useEffect/basic/Lifecycle11";
import Lifecycle12 from "./useEffect/basic/Lifecycle12";
import Lifecycle2 from "./useEffect/basic/Lifecycle2";
import Lifecycle3 from "./useEffect/basic/Lifecycle3";
import Lifecycle4 from "./useEffect/basic/Lifecycle4";
import Lifecycle5 from "./useEffect/basic/Lifecycle5";
import Lifecycle6 from "./useEffect/basic/Lifecycle6";
import Lifecycle7 from "./useEffect/basic/Lifecycle7";
import Lifecycle8 from "./useEffect/basic/Lifecycle8";
import Lifecycle9 from "./useEffect/basic/Lifecycle9";

const Components = [
  <Lifecycle1 />,
  <Lifecycle2 />,
  <Lifecycle3 />,
  <Lifecycle4 />,
  <Lifecycle5 />,
  <Lifecycle6 />,
  <Lifecycle7 />,
  <Lifecycle8 />,
  <Lifecycle9 />,
  <Lifecycle10 />,
  <Lifecycle11 />,
  <Lifecycle12 />
];

const Box = props => {
  return (
    <div style={{ padding: 10, border: "1px solid", marginBottom: 15 }}>
      {props.children}
    </div>
  );
};

const App = () => {
  return (
    <>
      {Components.map((Component, index) => {
        // async await 에러 표시되어 처리
        // 보고 싶은 경우 if문 주석 처리
        if (index === 8) return null;
        return <Box key={index}>{Component}</Box>;
      })}
    </>
  );
};

export default App;
