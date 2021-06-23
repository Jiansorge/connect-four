import React from 'react';
import '../App.css'

const Cell = ({cellData, columnIndex, rowIndex, placeChecker}) => {
  console.log(`Cell ${columnIndex},${rowIndex} Data:`, cellData)
  return (
    <li className={`cell ${cellData?.length>1 ? cellData : "gray"}`} 
    aria-labelledby={`Cell ${columnIndex}-${rowIndex}`}
    onClick={()=>placeChecker(columnIndex, rowIndex)}
    >
      |({columnIndex},{rowIndex})|
    </li>
  );
}

export default Cell;
