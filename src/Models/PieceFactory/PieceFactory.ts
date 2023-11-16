import { Colors } from "../Pieces/Colors";
import { Piece } from "../Pieces/Piece";

export abstract class PieceFactory {
  abstract createPiece: (
    type: string,
    color: Colors,
    x: number,
    y: number
  ) => Piece;
}
