import { Cell } from "../Cell";

export abstract class MoveStrategy {
  currentCell: Cell;
  constructor(currentCell: Cell) {
    this.currentCell = currentCell;
  }
  abstract move(target: Cell): void;

  canMove(target: Cell): boolean {
    return true;
  }
}
