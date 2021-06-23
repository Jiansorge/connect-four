import React, {useState} from 'react';
import Board from './Board';
import '../App.css'

const Game = () => {
  const [rowCount, setRowCount] = useState(4);
  const [columnCount, setColumnCount] = useState(4);
  const [playerColor, setPlayerColor] = useState('red');
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(
    Array.from(Array(columnCount), () => {
      return new Array(rowCount).fill(0)
  })
  );
  const [hasWon, setHasWon] = useState(false);

  const placeChecker = (x,y)=> {
    console.log(`set ${x},${y} to ${playerColor}`)
    if(moves.length > rowCount*columnCount){
      console.log("Error! Restarting game.")
      restartGame()
    }
    dropToken(x)
    setMoves([...moves, x])
    //checkWinner()
    changePlayer()
  }

  const dropToken=(column)=>{
    if (!!board[column][0]){
      return false
    } else {
      let y=rowCount-1
      while (y >= 0){
        if (board[column][y] === 0){
          const tempBoard = board.slice()
          tempBoard[column][y] = playerColor
          return setBoard(tempBoard)
        }
        y--
      }
    }
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
      setTimeout(
          restartGame(),
      10000)
    }
  }

  const restartGame=()=>{
    setBoard(new Array(columnCount).fill(new Array(rowCount).fill("")))
    setHasWon(false)
    setMoves(moves=>[])
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
        && <Board board={board} placeChecker={placeChecker}/>
      }
      {
        hasWon
        && <p>Player {playerColor} Wins!</p>
      }
      <h4 style={{"color":`${playerColor}`}}
      >
        Player {playerColor[0].toUpperCase()+playerColor.slice(1,)}'s Turn
      </h4>
      <p>Moves: [{moves}]</p>
    </div>
  );
}

export default Game;
