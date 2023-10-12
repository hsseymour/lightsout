import { useContext } from "react";
import { GridContext } from "../globalManagement/gridContext";
import { CreateRow } from "./createRow";

export const CreateColumns = ({ gls }) => {
  // eslint-disable-next-line no-unused-vars
  const [grid, _] = useContext(GridContext);

  return grid.map((row, index) => (
    <tr key={index}>
      <CreateRow gls={gls} row={row} />
    </tr>
  ));
};
