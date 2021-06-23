import React from 'react';
import Column from './Column';
import '../App.css'

const Board = ({ board, placeChecker, hasEnded }) => {
  const renderMatrix=()=>{
      const matrix = []
      board.forEach((x,index)=>{
        matrix.push(<Column columnData={board[index]} 
          columnIndex={index}
          key={index}
          placeChecker={placeChecker}
          hasEnded={hasEnded}
        />
        )
      })
      return matrix
    }

  return (
    <ul className="board">
      {
        renderMatrix()
      }
    </ul>
  );
}

export default Board;
