import React from 'react';
import '../App.css'

const Cell = ({cellData, columnIndex, rowIndex, placeChecker, hasEnded}) => {
  return (
    <li className={`cell ${cellData?.length>1 ? `${cellData} taken` : "gray"}`} 
    aria-labelledby={`Cell ${columnIndex}-${rowIndex}`}
    onClick={()=>{
      if (cellData === 0){
        placeChecker(columnIndex, rowIndex)
      } else if (!hasEnded) {
        alert(`Cell (${columnIndex},${rowIndex}) is no longer available.`)
      }
    }}
    >
      
    </li>
  );
}

export default Cell;
