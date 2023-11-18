import { Cell } from "../Board/Cell";
import { Colors } from "./Colors";
import { Piece } from "./Piece";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { BishopMove } from "../MoveStrategy/BishopMove";

export class Bishop extends Piece {
  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = ChessPiecesNames.BISHOP;
    this.moveStrategy = new BishopMove(this.cell);
  }
}
