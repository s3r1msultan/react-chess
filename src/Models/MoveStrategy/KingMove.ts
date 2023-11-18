import { Cell } from "../Board/Cell";
import { MoveStrategy } from "./MoveStrategy";

export class KingMove extends MoveStrategy {
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    // vertical move
    if (
      (target.y === this.currentCell.y + 1 ||
        target.y === this.currentCell.y - 1) &&
      target.x === this.currentCell.x &&
      this.currentCell.board.cells[target.y][target.x].isEmpty()
    ) {
      return true;
    }
    // horizontal move
    if (
      (target.x === this.currentCell.x + 1 ||
        target.x === this.currentCell.x - 1) &&
      target.y === this.currentCell.y &&
      this.currentCell.board.cells[target.y][target.x].isEmpty()
    ) {
      return true;
    }
    // diagonal move
    if (
      (target.y === this.currentCell.y + 1 ||
        target.y === this.currentCell.y - 1) &&
      (target.x === this.currentCell.x + 1 ||
        target.x === this.currentCell.x - 1)
    ) {
      return true;
    }

    return false;
  }
}
