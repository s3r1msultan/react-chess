import { Cell } from "../Cell";
import { MoveStrategy } from "./MoveStrategy";

export class RookMove extends MoveStrategy {
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.isEmptyVertical(target)) {
      return true;
    }

    if (this.isEmptyHorizontal(target)) {
      return true;
    }

    return false;
  }
}
