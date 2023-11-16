import { Cell } from "../Cell";
import { MoveStrategy } from "./MoveStrategy";

export class QueenMove extends MoveStrategy {
  move(target: Cell): void {
    throw new Error("Method not implemented.");
  }
}
