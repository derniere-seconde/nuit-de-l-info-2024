import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useSpring, animated } from "@react-spring/web"; // Import React Spring for animation

import level1 from "../assets/sealevels/level1.png";
import level2 from "../assets/sealevels/level2.png";
import level3 from "../assets/sealevels/level3.png";

const Test = () => {
  const parallax = useRef(null);

  const spring1 = useSpring({
    from: { backgroundPosition: "0% 0" }, 
    to: { backgroundPosition: "100% 0" },
    loop: { reverse: true },
    config: { duration: 4000 }, 
  });

  const spring2 = useSpring({
    from: { backgroundPosition: "100% 0" }, 
    to: { backgroundPosition: "0% 0" }, 
    loop: { reverse: true },
    config: { duration: 4300 }, 
  });

  const spring3 = useSpring({
    from: { backgroundPosition: "50% 0" }, 
    to: { backgroundPosition: "150% 0" }, 
    loop: { reverse: true },
    config: { duration: 5000 }, 
  });

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={1}>
        {/* Layer 1: Tiling animated background */}
        <ParallaxLayer offset={0.15} speed={0.2}>
          <animated.div
            style={{
              ...spring1,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${level1})`,
              backgroundSize: "auto 100%", // Maintain vertical size
              backgroundRepeat: "repeat", // Tile both horizontally and vertically
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={1}>
          <animated.div
            style={{
              ...spring2,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${level2})`,
              backgroundSize: "auto 100%", // Maintain vertical size
              backgroundRepeat: "repeat", // Tile both horizontally and vertically
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.25} speed={1}>
          <animated.div
            style={{
              ...spring3,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${level3})`,
              backgroundSize: "auto 100%", // Maintain vertical size
              backgroundRepeat: "repeat", // Tile both horizontally and vertically
            }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Test;
