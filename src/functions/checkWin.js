export const CheckWin = (grid) => {
  const isWin = !grid.some((columns) =>
    columns.find((cell) => cell.isLit === false)
  );
  return isWin;
};
