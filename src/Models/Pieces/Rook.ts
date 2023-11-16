import { Cell } from "../Cell";
import { Colors } from "./Colors";
import { Piece } from "./Piece";
import blackLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { RookMove } from "../MoveStrategy/RookMove";

export class Rook extends Piece {
  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = ChessPiecesNames.ROOK;
    this.moveStrategy = new RookMove(this.cell);
  }
}
