import React from 'react';
import Cell from './Cell';
import Column from './Column';

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
    <ul>
      {
        createMatrix()
      }
    </ul>
  );
}

export default Board;
