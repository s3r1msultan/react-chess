export class Timer {
  private static instance: Timer | null = null;
  private time = 300;

  private constructor() {}

  static getInstance(): Timer {
    if (!Timer.instance) {
      Timer.instance = new Timer();
    }
    return Timer.instance;
  }

  getTime(): number {
    return this.time;
  }
  setTime(time: number) {
    this.time = time;
  }
}
