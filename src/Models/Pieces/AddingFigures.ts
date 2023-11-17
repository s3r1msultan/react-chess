import { Cell } from "../Cell";
import { ClassicalChessFactory } from "../PieceFactory/ClassicalChessFactory";
import { PieceFactory } from "../PieceFactory/PieceFactory";
import { ChessPiecesNames } from "./ChessPiecesNames";
import { Colors } from "./Colors";

export class AddingPieces {
  private readonly cells: Cell[][];
  private pieceFactory: PieceFactory;
  constructor(cells: Cell[][]) {
    this.cells = cells;
    this.pieceFactory = new ClassicalChessFactory(this.cells);
  }

  private getCell(x: number, y: number): Cell {
    return this.cells[y][x];
  }

  setPieceFactory(pieceFactory: PieceFactory) {
    this.pieceFactory = pieceFactory;
  }

  private addPawns() {
    for (let i = 0; i < 8; ++i) {
      this.pieceFactory.createPiece(ChessPiecesNames.PAWN, Colors.BLACK, i, 1);
      this.pieceFactory.createPiece(ChessPiecesNames.PAWN, Colors.WHITE, i, 6);
    }
  }

  private addBishops() {
    this.pieceFactory.createPiece(ChessPiecesNames.BISHOP, Colors.BLACK, 2, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.BISHOP, Colors.BLACK, 5, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.BISHOP, Colors.WHITE, 2, 7);
    this.pieceFactory.createPiece(ChessPiecesNames.BISHOP, Colors.WHITE, 5, 7);
  }

  private addKnights() {
    this.pieceFactory.createPiece(ChessPiecesNames.KNIGHT, Colors.BLACK, 1, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.KNIGHT, Colors.BLACK, 6, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.KNIGHT, Colors.WHITE, 1, 7);
    this.pieceFactory.createPiece(ChessPiecesNames.KNIGHT, Colors.WHITE, 6, 7);
  }

  private addRooks() {
    this.pieceFactory.createPiece(ChessPiecesNames.ROOK, Colors.BLACK, 0, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.ROOK, Colors.BLACK, 7, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.ROOK, Colors.WHITE, 0, 7);
    this.pieceFactory.createPiece(ChessPiecesNames.ROOK, Colors.WHITE, 7, 7);
  }

  private addQueens() {
    this.pieceFactory.createPiece(ChessPiecesNames.QUEEN, Colors.BLACK, 3, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.QUEEN, Colors.WHITE, 3, 7);
  }

  private addKings() {
    this.pieceFactory.createPiece(ChessPiecesNames.KING, Colors.BLACK, 4, 0);
    this.pieceFactory.createPiece(ChessPiecesNames.KING, Colors.WHITE, 4, 7);
  }

  public addPieces() {
    this.addPawns();
    this.addKings();
    this.addBishops();
    this.addKnights();
    this.addQueens();
    this.addRooks();
  }
}
