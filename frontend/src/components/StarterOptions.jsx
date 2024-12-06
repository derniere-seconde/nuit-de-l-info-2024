import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import { Button, Image, Link } from "@nextui-org/react";

import Pokeball from "../assets/starters/pokeball.png";
import Pokeball_o from "../assets/starters/pokeball_open.png";
import QR from "../assets/qr.png";
import poke1 from "../assets/starters/douda.gif";

import CharmanderGIF from "../assets/charmander.gif";
import SquirtleGIF from "../assets/squirtle.gif";
import BulbasaurGIF from "../assets/bulbasaur.gif";

// Define content for list
export const starterList = [
  {
    title: "charmander",
    description: "Fire-type starter Pokémon",
    img: CharmanderGIF,
  },
  {
    title: "squirtle",
    description: "Water-type starter Pokémon",
    img: SquirtleGIF,
  },
  {
    title: "bulbasaur",
    description: "Grass-type starter Pokémon",
    img: BulbasaurGIF,
  },
];

const StarterOptions = () => {
  // State to track which item is clicked
  const [selectedStarter, setSelectedStarter] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = (index) => {
    // Set selected starter on button click
    setSelectedStarter(starterList[index]);
    console.log(selectedStarter);
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveRandomly = () => {
      const maxX = 800;
      const maxY = 600;

      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);

      setPosition({ x: newX, y: newY });
    };

    const intervalId = setInterval(moveRandomly, 900);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Selected Pokémon display */}

      {selectedStarter && (
        <Image
          src={selectedStarter.img}
          alt={selectedStarter.title}
          className="w-full h-64 object-contain"
        />
      )}

      {/* Button Grid */}
      <div className="gap-4 grid grid-cols-3">
        {starterList.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <Button
              isIconOnly
              className="w-24 h-24 data-[hover]:bg-foreground/10"
              radius="full"
              variant={selectedStarter === item ? "solid" : "light"}
              onClick={() => handleClick(index)}
            >
              <Image
                src={selectedStarter === item ? Pokeball_o : Pokeball}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </Button>
          </div>
        ))}
      </div>

      {selectedStarter && (
        <Link color="foreground" href={`/battle/${selectedStarter.title}`}>
          <Button className="pbutton">play</Button>
        </Link>
      )}

      <Button
        isIconOnly
        onPress={onOpen}
        className="w-24 h-24 data-[hover]:bg-foreground/10"
        radius="full"
        onClick={() => {}}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <Image src={poke1} className="w-full h-full object-contain" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Scan me</ModalHeader>
          <ModalBody>
            <Image src={QR}></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default StarterOptions;
