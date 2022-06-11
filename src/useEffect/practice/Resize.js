import { useEffect, useState } from "react";

const Resize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("width height", window.innerWidth, window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: 500,
        height: 500,
        backgroundColor:
          width < 400
            ? "red"
            : width < 600
            ? "skyblue"
            : width < 800
            ? "lightgray"
            : "orange"
      }}
    >
      {width}
    </div>
  );
};

export default Resize;
