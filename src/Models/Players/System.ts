import { Colors } from "../Pieces/Colors";
import { IPlayer } from "./IPlayer";
import { ISystem } from "./ISystem";

export class System implements ISystem {
  public turn: Colors = Colors.WHITE;

  private players: IPlayer[] = [];

  attach(player: IPlayer): void {
    const isExist = this.players.includes(player);
    if (isExist) {
      return console.log("System: Player has been attached already.");
    }

    console.log("System: Attached a player.");
    this.players.push(player);
  }

  detach(player: IPlayer): void {
    const playerIndex = this.players.indexOf(player);
    if (playerIndex === -1) {
      return console.log("System: Nonexistent player.");
    }

    this.players.splice(playerIndex, 1);
    console.log("System: Detached a player");
  }

  notify(): void {
    for (const player of this.players) {
      player.update(this);
    }
  }
}
