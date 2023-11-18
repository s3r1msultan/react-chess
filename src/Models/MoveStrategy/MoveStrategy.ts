import { Cell } from "../Board/Cell";
import { ChessPiecesNames } from "../Pieces/ChessPiecesNames";

export abstract class MoveStrategy {
  currentCell: Cell;

  constructor(currentCell: Cell) {
    this.currentCell = currentCell;
  }

  move(target: Cell): void {
    if (this.currentCell.piece && this.canMove(target)) {
      target.piece = this.currentCell.piece;
      this.currentCell.piece = null;
      this.currentCell = target;
    }
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.currentCell.x !== target.x) {
      return false;
    }

    const min = Math.min(this.currentCell.y, target.y);
    const max = Math.max(this.currentCell.y, target.y);
    for (let y = min + 1; y < max; ++y) {
      if (!this.currentCell.board.cells[y][this.currentCell.x].isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyHorizontal(target: Cell): boolean {
    if (this.currentCell.y !== target.y) {
      return false;
    }

    const min = Math.min(this.currentCell.x, target.x);
    const max = Math.max(this.currentCell.x, target.x);

    for (let x = min + 1; x < max; ++x) {
      if (!this.currentCell.board.cells[this.currentCell.y][x].isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.currentCell.x);
    const absY = Math.abs(target.y - this.currentCell.y);

    if (absX !== absY) return false;

    const dy = this.currentCell.y < target.y ? 1 : -1;
    const dx = this.currentCell.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; ++i) {
      if (
        !this.currentCell.board.cells[this.currentCell.y + dy * i][
          this.currentCell.x + dx * i
        ].isEmpty()
      )
        return false;
    }

    return true;
  }

  canMove(target: Cell): boolean {
    if (target.piece?.color === this.currentCell.piece?.color) {
      return false;
    }

    if (target.piece?.name === ChessPiecesNames.KING) {
      return false;
    }

    return true;
  }
}
