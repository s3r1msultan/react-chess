import { Cell } from "../Cell";
import { Colors } from "./Colors";
import { Piece } from "./Piece";
import blackLogo from "../../assets/black-queen.png";
import whiteLogo from "../../assets/white-queen.png";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { QueenMove } from "../MoveStrategy/QueenMove";

export class Queen extends Piece {
  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = ChessPiecesNames.QUEEN;
    this.moveStrategy = new QueenMove(this.cell);
  }
}
