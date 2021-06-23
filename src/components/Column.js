import React from 'react';
import Cell from './Cell';

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
    <ul>
      {
        appendCellsToColumn()
      }
    </ul>
  );
}

export default Column;
