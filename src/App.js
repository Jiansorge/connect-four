import logo from './logo.svg';
import './App.css';

function App() {
  let newBoard = []
  for (let x=0; x<4; x++){
    let newColumn = []
    for (let y=0; y<4; y++){
      newColumn.push(0)
    }
    newBoard.push(newColumn)
  }
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
    </div>
  );
}

export default App;
