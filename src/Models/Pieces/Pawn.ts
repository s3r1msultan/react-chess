import { Cell } from "../Board/Cell";
import { Colors } from "./Colors";
import { Piece } from "./Piece";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { PawnMove } from "../MoveStrategy/PawnMove";

export class Pawn extends Piece {
  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = ChessPiecesNames.PAWN;
    this.moveStrategy = new PawnMove(this.cell);
  }
}
