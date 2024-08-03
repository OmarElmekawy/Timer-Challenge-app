import Player from "./components/Player";
import TimeChallenge from "./components/TimeChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="easy" targetTime={1} />
        <TimeChallenge title="not easy" targetTime={5} />
        <TimeChallenge title="getting tough" targetTime={10} />
        <TimeChallenge title="not pros" targetTime={15} />
      </div>
    </>
  );
}

export default App;
