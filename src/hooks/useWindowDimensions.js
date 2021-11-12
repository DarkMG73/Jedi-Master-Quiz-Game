import { useState, useEffect } from "react";
// *** Usage ***
// const Component = () => {
//     const { height, width } = useWindowDimensions();

//     return (
//       <div>
//         width: {width} ~ height: {height}
//       </div>
//     );
//   }

// Hook
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log("width: ", width);
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  console.log("windowDimensions: ", windowDimensions);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
