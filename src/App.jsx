import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="1" sym="X" />
          <Player name="2" sym="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
