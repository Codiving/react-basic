import { useEffect } from "react";

const delayFunction = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("서버 데이터");
    }, 1000);
  });
};

const Lifecycle10 = () => {
  useEffect(() => {
    const result = (async () => {
      return await delayFunction();
    })();

    result.then(data => {
      console.log("result", data);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const result = await delayFunction();

      console.log("result", result);
    })();
  }, []);

  return <div></div>;
};

export default Lifecycle10;
