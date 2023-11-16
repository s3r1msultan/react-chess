import "./CellComponent.scss";
import { Cell } from "../../Models/Cell";

interface CellComponentProps {
  cell: Cell;
  select: (cell: Cell) => void;
  isSelected: boolean;
}
const CellComponent = ({ cell, select, isSelected }: CellComponentProps) => {
  const styleAttack = {
    backgroundColor: cell.available && cell.piece ? "green" : "",
  };
  return (
    <div
      className={`cell ${cell.color} ${isSelected ? "selected" : ""}`}
      onClick={() => {
        select(cell);
      }}
      style={styleAttack}
    >
      {cell.available && cell.isEmpty() && <div className="available"></div>}
      {cell.piece?.logo && (
        <img
          src={cell.piece.logo}
          alt={cell.piece.name}
        />
      )}
    </div>
  );
};

export default CellComponent;
