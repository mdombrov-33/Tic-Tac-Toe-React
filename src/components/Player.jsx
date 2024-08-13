export default function Player({ name, sym }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">Player {name}</span>
        <span className="player-symbol">{sym}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
