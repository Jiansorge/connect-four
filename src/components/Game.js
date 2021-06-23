import React, {useState} from 'react';
import Board from './Board';
import '../App.css'

const Game = () => {
  const [rowCount, setRowCount] = useState(4);
  const [columnCount, setColumnCount] = useState(4);
  const [playerColor, setPlayerColor] = useState('red');
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(
    new Array(columnCount).fill(new Array(rowCount).fill(undefined)),
  );
  const [hasWon, setHasWon] = useState(false);

  const placeChecker = (x,y)=> {
    console.log(`set ${x},${y} to ${playerColor}`)
    if(moves.length > rowCount*columnCount){
      console.log("Error! Restarting game.")
      restartGame()
    }
    console.log("board[x+1]",board[x+1])
    const tempBoard = board.slice()
    tempBoard[x][y] = playerColor
    console.log("temp board", tempBoard)
    setBoard(tempBoard)
    console.log("board after click",board)
    setMoves([...moves, x])
    //checkWinner()
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

  React.useEffect(() => {
    console.log("board",board)
  }, [board]);

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
      <h4 className={`${playerColor}`}
      >
        Player {playerColor[0].toUpperCase()+playerColor.slice(1,)}'s Turn
      </h4>
      <p>Moves: [{moves}]</p>
    </div>
  );
}

export default Game;
