import { Timer } from "../Timer/Timer";

export class TimerAdapter {
  private timer: Timer;

  constructor(timer: Timer) {
    this.timer = timer;
  }

  getTimeInMinutes(): number {
    return this.timer.getTime() / 60;
  }

  setTimeInMinutes(timeInMinutes: number): void {
    this.timer.setTime(timeInMinutes * 60);
  }
}
