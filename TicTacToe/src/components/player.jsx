import { useState } from "react";
export default function Player({
  inatialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setplayeName] = useState(inatialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setplayeName(event.target.value);
  }
  let editableplayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}
