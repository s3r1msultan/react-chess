import { useEffect, useState } from "react";
import "./App.scss";
import parse from "html-react-parser";
import BoardComponent from "./Components/Board/BoardComponent";
import { Board } from "./Models/Board/Board";
import { Player } from "./Models/Players/Player/Player";
import { Colors } from "./Models/Pieces/Colors";
import { System } from "./Models/Players/System/System";
import TimerComponent from "./Components/Timer/TimerComponent";
import { GreenText } from "./Models/Decorator/GreenText";
import { BaseText } from "./Models/Decorator/BaseText";
import { YellowText } from "./Models/Decorator/YellowText";

function App() {
  const [board, setBoard] = useState<Board>(new Board());

  // Observer pattern

  const [system, setSystem] = useState<System>(new System());

  const [whitePlayer] = useState<Player>(new Player(Colors.WHITE));

  const [blackPlayer] = useState<Player>(new Player(Colors.BLACK));

  useEffect(() => {
    system.turn = Colors.WHITE;
    system.attach(whitePlayer);
    system.attach(blackPlayer);
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ textAlign: "center", margin: "10px" }}>
            {system.turn === Colors.BLACK
              ? parse(new GreenText(blackPlayer.text).getText())
              : parse(new YellowText(blackPlayer.text).getText())}
          </p>

          <BoardComponent
            board={board}
            setBoard={setBoard}
            system={system}
            swapPlayer={swapPlayer}
          />

          <p style={{ textAlign: "center", margin: "10px" }}>
            {system.turn === Colors.WHITE
              ? parse(new GreenText(whitePlayer.text).getText())
              : parse(new YellowText(whitePlayer.text).getText())}
          </p>
        </div>

        <TimerComponent
          system={system}
          restart={restart}
          switchSides={switchSides}
        />
      </div>
    </div>
  );
}

export default App;
