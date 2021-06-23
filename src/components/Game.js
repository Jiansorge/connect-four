import React, {useState} from 'react';
import Board from './Board';
import '../App.css'

const Game = () => {
  const [rowCount, setRowCount] = useState(4);
  const [columnCount, setColumnCount] = useState(4);
  const [playerColor, setPlayerColor] = useState('red');
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(
    new Array(columnCount).fill(new Array(rowCount).fill("")),
  );
  const [hasWon, setHasWon] = useState(false);

  const placeChecker = (x,y, color)=> {
    setBoard([...board, board[x][y]=color])
    setMoves([...moves, x])
    checkWinner()
    changePlayer()
  }

  const isRowWin=(row)=>{

  }

  const isColumnWin=(column)=>{

  }

  const isDiagonalWin=(x,y, board, color)=>{

  }

  const checkWinner =()=>{
    if (isRowWin || isColumnWin || isDiagonalWin){
      setHasWon(true)
    }
    setTimeout(
      setHasWon(false), 10000
    )
    setBoard(new Array(columnCount).fill(new Array(rowCount).fill("")))
    setMoves([])
    setPlayerColor('red')
  }

  const changePlayer = ()=>{
    if (playerColor === "red"){
      setPlayerColor("black")
    } else {
      setPlayerColor("red")
    }
  }

  return (
    <div className="game">
      { 
        board 
        && <Board board={board}/>
      }
      {
        hasWon
        && <p>Player {playerColor} Wins!</p>
      }
      <h4 className={`${playerColor}`}
      >
        Player {playerColor[0].toUpperCase()+playerColor.slice(1,)}'s Turn
      </h4>
      <p>Moves: {moves}</p>
    </div>
  );
}

export default Game;
