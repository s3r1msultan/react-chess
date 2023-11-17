import React, { useEffect, useState } from "react";
import "./App.scss";
import BoardComponent from "./Components/Board/BoardComponent";
import { Board } from "./Models/Board";

function App() {
  const [board, setBoard] = useState<Board>(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces();
    setBoard(newBoard);
  }
  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
      <button onClick={() => restart()}>Restart</button>
    </div>
  );
}

export default App;
