import React from 'react';

import "./BoardComponent.scss"
import CellComponent from "../Cell/CellComponent";
import {Board} from "../../Models/Board";

interface BoardComponent {
    board:Board;
    setBoard: (board:Board)=>void;
}
function BoardComponent({board}:BoardComponent)  {
    return (
        <div className="board">
            {board.cells.map((row, index) => {

                return <React.Fragment key={index}>
                    {row.map((cell) => {
                        return <CellComponent color={cell.color}/>
                    })}
                </React.Fragment>
            })}
        </div>
    );
}

export default BoardComponent;