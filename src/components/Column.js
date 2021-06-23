import React from 'react';
import Cell from './Cell';
import '../App.css'

const Column = ({columnData, columnIndex, placeChecker, hasEnded}) => {
  const renderCellsToColumn=()=> {
    const column = []
    columnData.forEach((y,index)=>
      column.push(<Cell cellData={columnData[index]}
        columnIndex={columnIndex}
        rowIndex={index}
        key={`${columnIndex}-${index}`}
        placeChecker={placeChecker}
        hasEnded={hasEnded}
      />)
    )
    return column
  }

  return (
    <ul className="column">
      {
        renderCellsToColumn()
      }
    </ul>
  );
}

export default Column;
