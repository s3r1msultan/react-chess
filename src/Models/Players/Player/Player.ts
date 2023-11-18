import { Colors } from "../../Pieces/Colors";
import { IPlayer } from "./IPlayer";
import { ISystem } from "../System/ISystem";
import { System } from "../System/System";

export class Player implements IPlayer {
  color: Colors;
  text: string | undefined;

  constructor(color: Colors) {
    this.color = color;
  }

  update(system: ISystem): void {
    if (system instanceof System && system.turn === this.color) {
      this.text = "It's your turn to move";
    } else if (system instanceof System && system.turn !== this.color) {
      this.text = "It's enemy's turn to move";
    }
  }
}
