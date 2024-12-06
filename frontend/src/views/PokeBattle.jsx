import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import level1 from "../assets/sealevels/level1.png";
import level2 from "../assets/sealevels/level2.png";
import level3 from "../assets/sealevels/level3.png";
import { Image } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

const Test = () => {
  const parallax = useRef(null);
  const Magikarp =
    "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp-f.gif";
  const prefix =
    "https://img.pokemondb.net/sprites/black-white/anim/back-normal/";

  const location = useLocation();
  const selectedPokemon = location.pathname.split("/")[2];

  const [sprite, setSprite] = useState(Magikarp);
  const [offsets, setOffsets] = useState([0.6, 0.7, 0.79]); // Dynamic offsets
  const [scrollVal, setScrollVal] = useState(0.3); // Scroll position

  useEffect(() => {
    if (selectedPokemon) {
      setSprite(`${prefix}${selectedPokemon.toLowerCase()}.gif`);
    }
  }, [selectedPokemon]);
  // Question and answers data
  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Berlin", "Madrid", "Rome"],
      correct: 0,
    },
    {
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "6"],
      correct: 0,
    },
    {
      question: "What is the largest ocean?",
      answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
      correct: 0,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle button click
  const handleAnswerClick = (answer, id) => {
    // Optionally, move to the next question
    if (id != questions[currentQuestionIndex].correct) {
      decreaseOffsets();
    }
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

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

  const decreaseOffsets = () => {
    setOffsets((prev) => prev.map((offset) => offset - 0.1));

    if (parallax.current) {
      parallax.current.scrollTo(scrollVal);
      setScrollVal((prev) => prev + 0.2);
      if (scrollVal === 0.7) {
        alert("lost");
        window.location.reload();

      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

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
          color: "white",
        }}
      >
        <div className="w-[50vw] h-[15vh] bg-black p-1 border-4 border-indigo-500/75 bg-opacity-40">
          {currentQuestion.question}
        </div>
        <div className="h-[40vh] relative">
          <div className="absolute top-0 right-0 p-4">
            <Image src={Magikarp} className="w-full h-48 object-contain" />
          </div>
          {/* Bottom-right */}
          <div className="absolute bottom-0 left-0 p-4">
            <Image src={sprite} className="w-full h-48 object-contain" />
          </div>
        </div>
        <div className="w-[50vw] h-[20vh] border-4 border-indigo-500/75 p-1 bg-opacity-40 bg-black grid grid-cols-2 grid-rows-2 gap-1">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              className="pbutton h-[80%]"
              onClick={() => handleAnswerClick(answer, index)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <div style={{ width: "100%", height: "100%", background: "#253237" }}>
        <Parallax ref={parallax} pages={2}>
          {/* Layer 1: Tiling animated background */}
          <ParallaxLayer offset={offsets[0]} speed={0.3}>
            <animated.div
              style={{
                ...spring1,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${level1})`,
                backgroundSize: "auto 100%",
                backgroundRepeat: "repeat",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={offsets[1]} speed={0.2}>
            <animated.div
              style={{
                ...spring2,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${level2})`,
                backgroundSize: "auto 100%",
                backgroundRepeat: "repeat",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={offsets[2]} speed={0.1}>
            <animated.div
              style={{
                ...spring3,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${level3})`,
                backgroundSize: "auto 100%",
                backgroundRepeat: "repeat",
              }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Test;
