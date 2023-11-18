import { IPlayer } from "../Player/IPlayer";

export interface ISystem {
  attach(player: IPlayer): void;

  detach(player: IPlayer): void;

  notify(): void;
}
