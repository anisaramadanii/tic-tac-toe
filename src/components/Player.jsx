import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  let editingName = <span className="player-name">{playerName}</span>; 
  if (isEditing === true) {
    editingName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player-info">
          {editingName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
