import Player from "./components/player.js";
import GameBoard from "./components/GameBoard.js";
import Log from "./components/Log.js";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import { useState } from "react";
import GameOver from "./components/gameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActvePlayer(game) {
  let currSymbol = "X";
  if (game.length > 0 && game[0].player === "X") {
    currSymbol = "O";
  }
  return currSymbol;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playersName, setPlayersName] = useState({
    X: "player1",
    O: "player2",
  });
  const activePlayer = deriveActvePlayer(gameTurns);

  let gameBoard = initialGameBoard.map((array) => [...array]);
  for (turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner;
  for (combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = playersName[firstSymbol];
    }
  }
  let hasDraw = gameTurns.length === 9;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActvePlayer(prevTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayersName((prevName) => {
      return {
        ...prevName,
        [symbol]: newName,
      };
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            inatialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            inatialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} Board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
