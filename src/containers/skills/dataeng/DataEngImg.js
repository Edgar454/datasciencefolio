import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

// import data from "./data.svg"
// for animated svgs use json file
function DataEngineerImg() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./dataEngAnim.json"),
    });
  }, []);
  return (
    <div className="App">
      <div className="container" ref={container}></div>
    </div>
  );
}

// for static svgs
// class DesignImg extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//       <img src={data} alt="" width="450"/>
//       </div>
//       </div>
//     );
//   }
// }

// export default DesignImg;

export default DataEngineerImg;
