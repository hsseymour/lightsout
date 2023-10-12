// recieves a size and creates a square nested array filled with 'cell-like objects'
export const GenerateGrid = (size) => {
  const gridArray = Array.from({ length: size }, (value, index) => index).map(
    (column) => {
      return Array.from({ length: size }, (value, index) => index).map(
        (row) => {
          return {
            x: column,
            y: row,
            isLit: false,
            toTurn: [],
          };
        }
      );
    }
  );
  return gridArray;
};
