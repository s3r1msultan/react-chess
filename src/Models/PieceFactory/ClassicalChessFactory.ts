import { Cell } from "../Cell";
import { Bishop } from "../Pieces/Bishop";
import { ChessPiecesNames } from "../Pieces/ChessPiecesNames";
import { Colors } from "../Pieces/Colors";
import { King } from "../Pieces/King";
import { Knight } from "../Pieces/Knight";
import { Pawn } from "../Pieces/Pawn";
import { Piece } from "../Pieces/Piece";
import { Queen } from "../Pieces/Queen";
import { Rook } from "../Pieces/Rook";
import { PieceFactory } from "./PieceFactory";

export class ClassicalChessFactory extends PieceFactory {
  private readonly cells: Cell[][] = [];
  constructor(cells: Cell[][]) {
    super();
    this.cells = cells;
  }
  createPiece = (type: string, color: Colors, x: number, y: number): Piece => {
    let piece: Piece;
    if (type === ChessPiecesNames.PAWN) {
      piece = new Pawn(this.cells[y][x], color);
    } else if (type === ChessPiecesNames.BISHOP) {
      piece = new Bishop(this.cells[y][x], color);
    } else if (type === ChessPiecesNames.KNIGHT) {
      piece = new Knight(this.cells[y][x], color);
    } else if (type === ChessPiecesNames.ROOK) {
      piece = new Rook(this.cells[y][x], color);
    } else if (type === ChessPiecesNames.QUEEN) {
      piece = new Queen(this.cells[y][x], color);
    } else if (type === ChessPiecesNames.KING) {
      piece = new King(this.cells[y][x], color);
    } else {
      throw Error("This kind of piece is not defined");
    }
    return piece;
  };
}
