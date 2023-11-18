import { Cell } from "../Board/Cell";
import { Colors } from "./Colors";
import { Piece } from "./Piece";
import blackLogo from "../../assets/black-knight.png";
import whiteLogo from "../../assets/white-knight.png";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { KnightMove } from "../MoveStrategy/KnightMove";

export class Knight extends Piece {
  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = ChessPiecesNames.KNIGHT;
    this.moveStrategy = new KnightMove(this.cell);
  }
}
