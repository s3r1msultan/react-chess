import { Cell } from "../Cell";
import { Colors } from "./Colors";
import { Piece } from "./Piece";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { KingMove } from "../MoveStrategy/KingMove";

export class King extends Piece {
  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = ChessPiecesNames.KING;
    this.moveStrategy = new KingMove(this.cell);
  }
}
