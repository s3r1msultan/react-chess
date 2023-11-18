import { Colors } from "../Pieces/Colors";
import { Piece } from "../Pieces/Piece";
import { Board } from "./Board";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  piece: Piece | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(
    board: Board,
    piece: Piece | null,
    color: Colors,
    x: number,
    y: number
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
    this.piece = piece;
    this.available = false;
    this.id = Math.random();
  }

  isEmpty(): boolean {
    return this.piece === null;
  }

  isEnemy(target: Cell): boolean {
    if (target.piece) {
      return this.piece?.color !== target.piece?.color;
    }
    return false;
  }
}
