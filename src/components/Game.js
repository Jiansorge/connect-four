import React, {useState} from 'react';
import Board from './Board';
import '../App.css'

// TODO 
//1) checkWinner()
//2) pick me or robot goes first
//3) use 9dt api to return column 
// submit and setup interview

const Game = () => {
  const rowCount = 4;
  const columnCount = 4;
  const [playerColor, setPlayerColor] = useState('red');
  const [doesPlayerGoFirst, setDoesPlayerGoFirst] = useState(undefined);
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
    // if (checkWinner()){
    //   return
    // }
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

  // const isRowWin=(row)=>{
  //   return false
  // }

  // const isColumnWin=(column)=>{
  //   return false
  // }

  // const isDiagonalWin=(x,y, board, color)=>{
  //   return false
  // }

  // const checkWinner =()=>{
  //   if (isRowWin || isColumnWin || isDiagonalWin){
  //     setHasWon(true)
  //     endGame()
  //     return true
  //   }
  //   return false
  // }

  const endGame=()=>{
    setHasEnded(true)
  }

  const restartGame=()=>{
    setBoard(clearGrid())
    setHasWon(false)
    setMoves(moves=>[])
    setPlayerColor('red')
    setHasEnded(false)
    setDoesPlayerGoFirst(undefined)
  }

  const changePlayer = ()=>{
    if (playerColor === "red"){
      setPlayerColor("black")
    } else {
      setPlayerColor("red")
    }
  }

  // const SelectWhoGoesFirst =()=>{
  //   return (
  //     <>
  //       <h3>Select turn order:</h3>
  //       <ul>
  //         <li><input type="radio" onClick={()=>setDoesPlayerGoFirst(true)}></input> Player goes First</li>
  //         <li><input type="radio" onClick={()=>setDoesPlayerGoFirst(false)}></input> AI goes First</li>
  //       </ul> 
  //     </>
  //   )
  // }

  const Notification = () =>{
    return (
      <div className="message">
        {  
          // doesPlayerGoFirst === undefined
          // ? <SelectWhoGoesFirst />
          // :
          hasEnded
          && ( 
            hasWon 
            ? <h2>Player {toUpper(playerColor)} Won! Play again?</h2>
            : <h2>Draw! New game?</h2>
          )
        }
      </div>
    )
  }

  const toUpper=(string)=>{
    return playerColor[0].toUpperCase()+playerColor.slice(1,)
  }

  return (
    <div className="game"  
    onClick={()=> hasEnded? restartGame() : ''}
    >
      <Notification/>
      { 
        board 
        && <Board board={board} placeChecker={placeChecker}
          hasEnded={hasEnded}/>
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
