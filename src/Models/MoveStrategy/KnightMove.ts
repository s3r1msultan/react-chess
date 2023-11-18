import { Cell } from "../Board/Cell";
import { MoveStrategy } from "./MoveStrategy";

export class KnightMove extends MoveStrategy {
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const dx = Math.abs(this.currentCell.x - target.x);
    const dy = Math.abs(this.currentCell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}
