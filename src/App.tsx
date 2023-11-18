import React, { useEffect, useState } from "react";
import "./App.scss";
import BoardComponent from "./Components/Board/BoardComponent";
import { Board } from "./Models/Board";
import { Player } from "./Models/Players/Player/Player";
import { Colors } from "./Models/Pieces/Colors";
import { System } from "./Models/Players/System/System";

function App() {
  const [board, setBoard] = useState<Board>(new Board());

  const [system, setSystem] = useState<System>(new System());

  const [whitePlayer, setWhitePlayer] = useState<Player>(
    new Player(Colors.WHITE)
  );
  system.attach(whitePlayer);

  const [blackPlayer, setBlackPlayer] = useState<Player>(
    new Player(Colors.BLACK)
  );
  system.attach(blackPlayer);

  useEffect(() => {
    system.turn = Colors.WHITE;
    system.notify();
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces();
    setBoard(newBoard);
  }

  function switchSides() {
    if (window.confirm("Are you sure to switch sides?")) {
      restart();
      swapPlayer();
    }
  }

  function swapPlayer() {
    system.turn = system.turn === Colors.WHITE ? Colors.BLACK : Colors.WHITE;
    system.notify();
    setSystem(system);
  }

  return (
    <div className="App">
      <div>
        <p style={{ textAlign: "center", margin: "10px" }}>
          {blackPlayer.text}
        </p>

        <BoardComponent
          board={board}
          setBoard={setBoard}
          system={system}
          swapPlayer={swapPlayer}
        />

        <p style={{ textAlign: "center", margin: "10px" }}>
          {whitePlayer.text}
        </p>
      </div>

      <div>
        <button onClick={() => restart()}>Restart</button>
        <button onClick={() => switchSides()}>Switch sides</button>
      </div>
    </div>
  );
}

export default App;
