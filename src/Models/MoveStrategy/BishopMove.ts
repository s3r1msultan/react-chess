import { Cell } from "../Cell";
import { MoveStrategy } from "./MoveStrategy";

export class BishopMove extends MoveStrategy {
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
