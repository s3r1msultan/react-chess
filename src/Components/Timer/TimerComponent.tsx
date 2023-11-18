import { useEffect, useRef, useState } from "react";
import { Timer } from "../../Models/Timer/Timer";
import { System } from "../../Models/Players/System/System";
import { Colors } from "../../Models/Pieces/Colors";
import "./TimerComponent.scss";
import { TimerAdapter } from "../../Models/TimerAdapter/TimerAdapter";

interface TimerComponentProps {
  system: System;
  restart: () => void;
  switchSides: () => void;
}

export default function TimerComponent({
  system,
  restart,
  switchSides,
}: TimerComponentProps) {
  const timerInSeconds = Timer.getInstance();
  const timerInMinutes = new TimerAdapter(Timer.getInstance());
  const [blackTime, setBlackTime] = useState(timerInSeconds.getTime());
  const [whiteTime, setWhiteTime] = useState(timerInSeconds.getTime());

  const timerRef = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [system.turn]);

  function startTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    const callback =
      system.turn === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timerRef.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev: number) => {
      if (prev > 0) return prev - 1;
      else {
        alert("White wins");
        return prev;
      }
    });
  }

  function decrementWhiteTimer() {
    setWhiteTime((prev: number) => {
      if (prev > 0) return prev - 1;
      else {
        alert("Black wins");
        return prev;
      }
    });
  }

  function handleRestart() {
    restart();
    reset();
  }

  function handleSwitchSides() {
    switchSides();
    reset();
  }

  function reset() {
    setWhiteTime(timerInSeconds.getTime());
    setBlackTime(timerInSeconds.getTime());
  }

  function handleGiveUp() {
    if (!window.confirm("Do you really want to give up?")) return;
    if (system.turn === Colors.WHITE) {
      alert("Black wins");
    } else {
      alert("White wins");
    }
    handleRestart();
  }

  function handleSetTimerInSeconds() {
    const time = Number(prompt("Enter your timer in seconds: "));
    if (time <= 0) return;
    timerInSeconds.setTime(time);
    handleRestart();
  }

  function handleSetTimerInMinutes() {
    const time = Number(prompt("Enter your timer in minutes: "));
    if (time <= 0) return;
    timerInMinutes.setTimeInMinutes(time);
    handleRestart();
  }

  return (
    <div className="timer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          Black: <br />
          {blackTime}
        </div>

        <div>
          White: <br />
          {whiteTime}
        </div>
      </div>

      <button onClick={handleRestart}>Restart</button>
      <button onClick={handleSwitchSides}>Switch Sides</button>
      <button onClick={handleGiveUp}>Give up</button>
      <button onClick={handleSetTimerInSeconds}>Set Time in seconds</button>
      <button onClick={handleSetTimerInMinutes}>Set Time in minutes</button>
    </div>
  );
}
