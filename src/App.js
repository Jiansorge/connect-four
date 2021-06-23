import './App.css';
import Game from './components/Game';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Connect Four</h1>
      </header>
      <main>
        <Game/>
      </main>
      <footer>
        <p>Created by <a href="https://linkedin.com/in/jiansorge">Jian Sorge</a></p>
      </footer>
    </div>
  );
}

export default App;
