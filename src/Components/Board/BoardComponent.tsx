import React, { useEffect, useState } from "react";

import "./BoardComponent.scss";
import CellComponent from "../Cell/CellComponent";
import { Board } from "../../Models/Board/Board";
import { Cell } from "../../Models/Board/Cell";
import { System } from "../../Models/Players/System/System";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
  swapPlayer: () => void;
  system: System;
}
function BoardComponent({
  board,
  setBoard,
  swapPlayer,
  system,
}: BoardComponentProps) {
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
      swapPlayer();
      setSelectedCell(null);
    } else if (cell.piece && cell.piece.color === system.turn) {
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
