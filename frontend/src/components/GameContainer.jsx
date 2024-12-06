import { useEffect } from "react";
import PropTypes from "prop-types";
import Phaser from "phaser";

const GameContainer = ({ config }) => {
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => game.destroy(true);
  });

  return <div id="game-container"></div>;
};

GameContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default GameContainer;
