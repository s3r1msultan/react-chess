import { Cell } from "./Cell";
import { AddingPieces } from "./Pieces/AddingFigures";
import { Colors } from "./Pieces/Colors";

export class Board {
  cells: Cell[][] = [];
  private addingPieces: AddingPieces = new AddingPieces(this.cells);
  public initCells() {
    for (let i = 0; i < 8; ++i) {
      let row: Cell[] = [];
      for (let j = 0; j < 8; ++j) {
        if ((i + j) % 2 === 0) {
          row.push(new Cell(this, null, Colors.BLACK, j, i)); // Black cells
        } else {
          row.push(new Cell(this, null, Colors.WHITE, j, i)); // White cells
        }
      }
      this.cells.push(row);
    }
  }
  public addPieces() {
    this.addingPieces.addPieces();
  }
}
