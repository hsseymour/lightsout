export const CellClicked = (cell, grid) => {
  const tempArray = grid.slice();
  tempArray[cell.x][cell.y].isLit = !grid[cell.x][cell.y].isLit;
  tempArray[cell.x][cell.y].toTurn.forEach((otherCell) => {
    tempArray[otherCell.x][otherCell.y].isLit =
      !grid[otherCell.x][otherCell.y].isLit;
  });
  return tempArray;
};
