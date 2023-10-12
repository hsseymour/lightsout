import { CreateColumns } from "./createColumns";

export const CreateGrid = ({ gls }) => {
  return (
    <div>
      <table className="gameTable">
        <tbody>
          <CreateColumns gls={gls} />
        </tbody>
      </table>
    </div>
  );
};
