import { useState } from "react";

export default function Player({ name, sym }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required />
        ) : (
          <span className="player-name">Player {name}</span>
        )}
        <span className="player-symbol">{sym}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
