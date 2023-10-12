import { useContext } from "react";
import { GridContext } from "../globalManagement/gridContext";
import { ScoreContext } from "../globalManagement/scoreContext";
import { CellClicked } from "../functions/cellClicked";
import { CheckWin } from "../functions/checkWin";

export const CreateCell = ({ gls, cell }) => {
  // eslint-disable-next-line no-unused-vars
  const [grid, setGrid] = useContext(GridContext);
  const [score, setScore] = useContext(ScoreContext);
  const [gameLevel, setGameLevel] = gls;

  return (
    <button
      type="button"
      className={`cell isCellLit-${cell.isLit}`}
      onClick={() => {
        setGrid(CellClicked(cell, grid));
        if (CheckWin(grid)) {
          setGameLevel(gameLevel + 1);
          const newScoreArray = score;
          newScoreArray.push({ level: gameLevel, time: 0 });
          setScore(newScoreArray);
        }
      }}
    ></button>
  );
};
