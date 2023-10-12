import { Random } from "./random";

export const AssignNeigbours = (gridArray) => {
  const newGridArray = Array.from(gridArray);
  const Neighbours = [
    { x: -1, y: -1 },
    { x: -0, y: -1 },
    { x: +1, y: -1 },
    { x: -1, y: -0 },
    { x: +1, y: -0 },
    { x: -1, y: +1 },
    { x: -0, y: +1 },
    { x: +1, y: +1 },
  ];

  for (let i = 0; i < newGridArray.length; i++) {
    for (let j = 0; j < newGridArray[i].length; j++) {
      for (let q = 0; q < Neighbours.length; q++) {
        const rnd = Random(0, 3);
        if (rnd === 1) {
          if (
            i + Neighbours[q].x >= 0 &&
            j + Neighbours[q].y >= 0 &&
            i + Neighbours[q].x < gridArray.length &&
            j + Neighbours[q].y < gridArray[j].length
          ) {
            newGridArray[i][j].toTurn.push({
              x: i + Neighbours[q].x,
              y: j + Neighbours[q].y,
            });
          }
        }
      }
    }
  }
  return newGridArray;
};
