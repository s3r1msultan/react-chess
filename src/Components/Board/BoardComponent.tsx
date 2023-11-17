import React, { useEffect, useState } from "react";

import "./BoardComponent.scss";
import CellComponent from "../Cell/CellComponent";
import { Board } from "../../Models/Board";
import { Cell } from "../../Models/Cell";

interface BoardComponent {
  board: Board;
  setBoard: (board: Board) => void;
}
function BoardComponent({ board, setBoard }: BoardComponent) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highLightCells();
  }, [selectedCell]);

  function select(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.piece?.moveStrategy?.canMove(cell)
    ) {
      selectedCell.piece.moveStrategy.move(cell);
      setSelectedCell(null);
    } else if (cell.piece) {
      setSelectedCell(cell);
    }
  }

  function highLightCells(): void {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((cell) => {
              return (
                <CellComponent
                  cell={cell}
                  key={cell.id}
                  select={select}
                  isSelected={
                    cell.x === selectedCell?.x && cell.y === selectedCell?.y
                  }
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BoardComponent;
