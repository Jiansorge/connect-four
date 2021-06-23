import React from 'react';
import '../App.css'

const Cell = ({cellData, columnIndex, rowIndex, placeChecker}) => {
  return (
    <li className={`cell ${cellData?.length>1 ? `${cellData} taken` : "gray"}`} 
    aria-labelledby={`Cell ${columnIndex}-${rowIndex}`}
    onClick={()=>{
      if (cellData === 0){
        placeChecker(columnIndex, rowIndex)
      } else {
        alert(`Cell (${columnIndex},${rowIndex}) is no longer available.`)
      }
    }}
    >
      |({columnIndex},{rowIndex})|
    </li>
  );
}

export default Cell;
