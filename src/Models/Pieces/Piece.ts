import { Cell } from "../Cell";
import { MoveStrategy } from "../MoveStrategy/MoveStrategy";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { Colors } from "./Colors";
import logo from "../assets/black-king.png";

export abstract class Piece {
  name: ChessPiecesNames;
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  id: string;
  moveStrategy: MoveStrategy | null;

  constructor(cell: Cell, color: Colors) {
    this.cell = cell;
    this.color = color;
    this.cell.piece = this;
    this.logo = null;
    this.name = ChessPiecesNames.PIECE;
    this.id =
      this.name + this.color + this.cell.y.toString() + this.cell.x.toString();
    this.moveStrategy = null;
  }

  setMoveStrategy(moveStrategy: MoveStrategy) {
    this.moveStrategy = moveStrategy;
  }
}
