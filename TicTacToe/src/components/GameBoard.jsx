export default function GameBoard({ onSelectSquare, Board }) {
  // function handleSlectedSquare(rowIndex, colIndex) {
  // setGameboard((previousGameBoard) => {
  // const updatedGameBoard = [
  // ...previousGameBoard.map((innerArray) => [...innerArray]),
  //];
  //updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //return updatedGameBoard;
  //});
  //onSelectSquare();
  //}
  return (
    <ol id="game-board">
      {Board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
