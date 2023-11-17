import { Cell } from "../Cell";
import { MoveStrategy } from "./MoveStrategy";

export class KingMove extends MoveStrategy {
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
