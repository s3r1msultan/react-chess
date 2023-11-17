import { Colors } from "../Pieces/Colors";
import { ISystem } from "./ISystem";

export interface IPlayer {
  color: Colors;
  update(system: ISystem): void;
}
