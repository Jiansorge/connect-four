import React, {useState} from 'react';
import Board from './Board';
import Cell from './Cell';

const Game = () => {
  const [rowCount, setRowCount] = useState(4);
  const [columnCount, setColumnCount] = useState(4);
  const [board, setBoard] = useState(
    new Array(columnCount).fill(new Array(rowCount).fill("")),
  );

  return (
    <div>
      { 
        board 
        && <Board board={board}/>
      }
    </div>
  );
}

export default Game;
