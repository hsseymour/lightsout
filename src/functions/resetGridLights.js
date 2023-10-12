export const ResetGridLights = (grid) => {
  const newGrid = grid.slice();
  for (let i = 0; i < newGrid.length; i++) {
    for (let j = 0; j < newGrid.length; j++) {
      newGrid[i][j].isLit = false;
    }
  }
  return newGrid;
};
