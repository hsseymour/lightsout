import { useContext } from "react";
import { GridContext } from "../globalManagement/gridContext";
import { ResetGridLights } from "../functions/resetGridLights";

export const CreateResetButton = () => {
  const [grid, setGrid] = useContext(GridContext);

  return (
    <button
      type="button"
      className="resetButton"
      onClick={() => {
        setGrid(ResetGridLights(grid));
      }}
    >
      Reset
    </button>
  );
};
