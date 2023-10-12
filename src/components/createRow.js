import { CreateCell } from "./createCell";

export const CreateRow = ({ gls, row }) => {
  return row.map((cell, index) => (
    <td key={index}>
      <CreateCell gls={gls} cell={cell} />
    </td>
  ));
};
