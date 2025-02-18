import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModel = forwardRef(function ResultModel(
  { onReset, targetTime, remainigTime },
  ref
) {
  const dialog = useRef();

  const formettingRemaingTime = (remainigTime / 1000).toFixed(2);
  const score = (1 - remainigTime / (targetTime * 1000)) * 100;

  const useLost = remainigTime <= 0;
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      {useLost && <h2>you lost</h2>}
      {score && <h2>your score {score}</h2>}
      <p>
        the target time was <strong>{targetTime}</strong>seconds.
      </p>
      <p>
        you stoppeed the timer with{" "}
        <strong>{formettingRemaingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModel;
