import React, {useState} from 'react';
import Board from './Board';
import '../App.css'

const Game = () => {
  const [rowCount, setRowCount] = useState(4);
  const [columnCount, setColumnCount] = useState(4);
  const [playerColor, setPlayerColor] = useState('red');
  const [moves, setMoves] = useState([]);

  const clearGrid = ()=>{
    return Array.from(Array(columnCount), () => {
      return new Array(rowCount).fill(0)
    })
  }

  const [board, setBoard] = useState(clearGrid());
  const [hasWon, setHasWon] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  

  const placeChecker = (x,y)=> {
    dropToken(x)
    setMoves([...moves, x])
    //checkWinner()
    if(moves.length === rowCount*columnCount-1){
      return endGame()
    }
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
      endGame()
    }
  }

  const endGame=()=>{
    setHasEnded(true)
  }

  const restartGame=()=>{
    setBoard(clearGrid())
    setHasWon(false)
    setMoves(moves=>[])
    setPlayerColor('red')
    setHasEnded(false)
  }

  const changePlayer = ()=>{
    if (playerColor === "red"){
      setPlayerColor("black")
    } else {
      setPlayerColor("red")
    }
  }

  const Message = () =>{
    return (<h2 className="message">
      {
        hasEnded
        && (
          hasWon 
          ? `Player ${toUpper(playerColor)} Won!`
          : "Draw! New game?"
        )}
    </h2>)
  }

  const toUpper=(string)=>{
    return playerColor[0].toUpperCase()+playerColor.slice(1,)
  }

  return (
    <div className="game"  onClick={()=> hasEnded ? restartGame() : ''}
    >
      <Message/>
      { 
        board 
        && <Board board={board} placeChecker={placeChecker}/>
      }
      <h4 style={{"color":`${playerColor}`}}
      >
        Player {toUpper(playerColor)}'s Turn
      </h4>
      <p>Moves: [{moves}]</p>
    </div>
  );
}

export default Game;
