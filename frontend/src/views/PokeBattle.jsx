import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useSpring, animated } from "@react-spring/web"; // Import React Spring for animation

import level1 from "../assets/sealevels/level1.png";
import level2 from "../assets/sealevels/level2.png";
import level3 from "../assets/sealevels/level3.png";
import { Button, Image } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

const Test = () => {
  const parallax = useRef(null);
  const Magikarp =
    "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp-f.gif";
  const prefix =
    "https://img.pokemondb.net/sprites/black-white/anim/back-normal/";

  const location = useLocation();
  const selectedPokemon = location.pathname.split("/")[2];
  console.log(selectedPokemon);

  const [sprite, setSprite] = useState(Magikarp);

  useEffect(() => {
    if (selectedPokemon) {
      setSprite(`${prefix}${selectedPokemon.toLowerCase()}.gif`);
    }
  }, []);

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
    <>
      {/* Centered div */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          color: "white", // Optional: adjust text color
        }}
      >
        <div className="w-[50vw] h-[15vh] bg-black p-1 border-4 border-indigo-500/75  bg-opacity-40 ">
          {" "}
          question{" "}
        </div>
        <div className="h-[40vh] relative">
          {" "}
          <div className="absolute top-0 right-0 p-4 ">
            <Image src={Magikarp} className="w-full h-48 object-contain" />
          </div>
          {/* Bottom-right */}
          <div className="absolute bottom-0 left-0 p-4 ">
            <Image
              src={sprite}
              className="w-full h-48 object-contain"
            />
          </div>
        </div>
        <div className="w-[50vw] h-[20vh] border-4 border-indigo-500/75 p-1 bg-opacity-40 bg-black grid grid-cols-2 grid-rows-2 gap-1 ">
          <button className="pbutton  h-[80%]  ">button 1</button>
          <button className="pbutton h-[80%]  ">button 2</button>
          <button className=" pbutton h-[80%]  ">button 3</button>
          <button className="pbutton h-[80%]  ">button 4</button>
        </div>
      </div>
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
    </>
  );
};

export default Test;
