import React, { useState, useEffect } from "react";
import "./Game.css";
import Board from "../board/Board";
import VerticalDescription from "../verticalDescription/VerticalDescription";
import HorizontalDescription from "../horizontalDescription/HorizontalDescription";
import { getStartPosition } from "./GameUtils";

function Game() {
  const [pieces, setPieces] = useState([]); //why array with an array?
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setPieces([getStartPosition]);
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <div className="game-wrapper">
      <VerticalDescription />
      <Board pieces={pieces} setPieces={setPieces} />
      <HorizontalDescription />
    </div>
  );
}

export default Game;
