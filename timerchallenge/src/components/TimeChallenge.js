import { useRef, useState } from "react";
import ResultModel from "./ResultModel";
export default function TimeChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((preTimeRemaining) => preTimeRemaining - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModel
        targetTime={targetTime}
        remainigTime={timeRemaining}
        ref={dialog}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "time is running..." : "Timer interactive"}
        </p>
      </section>
    </>
  );
}
