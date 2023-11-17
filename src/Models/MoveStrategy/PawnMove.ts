import { Cell } from "../Cell";
import { Colors } from "../Pieces/Colors";
import { MoveStrategy } from "./MoveStrategy";

export class PawnMove extends MoveStrategy {
  private isFirstStep: boolean = true;

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const direction = this.currentCell.piece?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection =
      this.currentCell.piece?.color === Colors.BLACK ? 2 : -2;

    if (
      (target.y === this.currentCell.y + direction ||
        (this.isFirstStep &&
          target.y === this.currentCell.y + firstStepDirection)) &&
      target.x === this.currentCell.x &&
      this.currentCell.board.cells[target.y][target.x].isEmpty()
    ) {
      return true;
    }

    if (
      target.y === this.currentCell.y + direction &&
      (target.x === this.currentCell.x + 1 ||
        target.x === this.currentCell.x - 1) &&
      this.currentCell.isEnemy(target)
    ) {
      return true;
    }

    return false;
  }

  move(target: Cell): void {
    super.move(target);
    this.isFirstStep = false;
  }
}
