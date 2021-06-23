import React from 'react';
import Column from './Column';
import '../App.css'

const Board = ({ board, placeChecker }) => {
  const renderMatrix=()=>{
      const matrix = []
      board.forEach((x,index)=>{
        matrix.push(<Column columnData={board[index]} 
          columnIndex={index}
          key={index}
          placeChecker={placeChecker}
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
