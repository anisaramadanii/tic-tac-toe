import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // true
  }

  // function handleChange(event) {
  //   setPlayerName(event.target.value);
  // }

  let editingName = <span className="player-name">{playerName}</span>; //initial value
  // let buttonEdit = "Edit";

  if (isEditing === true) {
    editingName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
    );
    // buttonEdit = "Save";
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
