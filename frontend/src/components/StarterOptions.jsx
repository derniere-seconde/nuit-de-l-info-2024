import React, { useState } from "react";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import Pokeball from "../assets/starters/pokeball.png";
import Pokeball_o from "../assets/starters/pokeball_open.png";

import poke1 from "../assets/starters/charmander.png";
import poke2 from "../assets/starters/squirtle.png";
import poke3 from "../assets/starters/venosaure.png";

// Define content for list
const list = [
  {
    title: "Charmander",
    description: "Fire-type starter Pokémon",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
  },
  {
    title: "Squirtle",
    description: "Water-type starter Pokémon",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
  },
  {
    title: "Bulbasaur",
    description: "Grass-type starter Pokémon",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
  },
];

const StarterOptions = () => {
  // State to track which item is clicked
  const [selectedStarter, setSelectedStarter] = useState(null);

  const handleClick = (index) => {
    // Set selected starter on button click
    setSelectedStarter(list[index]);
  };

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
        {list.map((item, index) => (
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
    </div>
  );
};

export default StarterOptions;
