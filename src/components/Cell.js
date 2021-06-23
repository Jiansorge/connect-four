import React from 'react';
import '../App.css'

const Cell = ({cellData, columnIndex, rowIndex}) => {
  return (
    <li className="cell" aria-labelledby={`Cell ${columnIndex}-${rowIndex}`}>
      |_|
    </li>
  );
}

export default Cell;
