import React from 'react';
import Column from './Column';
import '../App.css'

const Board = ({ board }) => {
  const createMatrix=()=>{
      const matrix = []
      board.forEach((x,index)=>{
        matrix.push(<Column columnData={board[index]} 
          columnIndex={index}
          key={index}
        />
        )
      })
      return matrix
    }

  return (
    <ul className="board">
      {
        createMatrix()
      }
    </ul>
  );
}

export default Board;
