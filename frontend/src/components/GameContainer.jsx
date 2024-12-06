import { useEffect } from "react";
import PropTypes from "prop-types";
import Phaser from "phaser";

const Game = ({ config }) => {
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => game.destroy(true);
  });

  return <div id="game-container"></div>;
};

Game.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Game;
