import React, {useEffect, useState} from 'react';
import './App.scss';
import BoardComponent from "./Components/Board/BoardComponent";
import {Board} from "./Models/Board";

function App() {
    const [board, setBoard] = useState(Board.getInstance);
    board.initCells();


  return (
    <div className="App">
        <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
