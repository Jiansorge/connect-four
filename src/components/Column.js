import React from 'react';
import Cell from './Cell';
import '../App.css'

const Column = ({columnData, columnIndex}) => {
  const appendCellsToColumn=()=> {
    const column = []
    columnData.forEach((y,index)=>
      column.push(<Cell cellData={columnData[index]}
        columnIndex={columnIndex}
        rowIndex={index}
        key={`${columnIndex}-${index}`}
      />)
    )
    return column
  }

  return (
    <ul className="column">
      {
        appendCellsToColumn()
      }
    </ul>
  );
}

export default Column;
