import { Colors } from "../Pieces/Colors";
import { IPlayer } from "./IPlayer";
import { ISystem } from "./ISystem";
import { System } from "./System";

export class Player implements IPlayer {
  color: Colors;

  constructor(color: Colors) {
    this.color = color;
  }

  update(system: ISystem): void {
    if (system instanceof System) {
      console.log("Player: Reacted to the event.");
    }
  }
}
