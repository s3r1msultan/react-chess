import {Cell} from "./Cell";
import {Piece} from "./Pieces/Piece";
import {Colors} from "./Colors";

export class Board {
    private static instance: Board;
    cells: Cell[][] = [];

    private constructor() {
    }

    static getInstance() {
        if (!Board.instance){
            Board.instance = new Board();
        }
        return Board.instance;
    }

    public initCells() {
        for (let i = 0; i < 8; i++) {
            let row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if((i+j)%2===0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) // black color
                } else{
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) // white color
                }
            }
            this.cells.push(row);
        }
    }

    public restart() {
        Board.getInstance().initCells();
    }
}