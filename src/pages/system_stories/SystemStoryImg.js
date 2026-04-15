import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

export default function SystemStoryImg() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./blogging_nobg.json"),
    });
  }, []);
  return (
    <div className="App">
      <div
        className="container"
        ref={container}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
}
