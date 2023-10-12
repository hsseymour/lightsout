import { useContext } from "react";
import { ScoreContext } from "../globalManagement/scoreContext";
import { CreateTimer } from "./createTimer";
import { CreateScoreList } from "./createScoreList";

export const CreateScoreCard = ({ gameLevel }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setScore] = useContext(ScoreContext);
  // eslint-disable-next-line no-unused-vars
  const [__, setGameLevel] = gameLevel;

  return (
    <div>
      <h4 className="scoreHeader">SCORE CARD:</h4>
      <CreateTimer gameLevel={gameLevel[0]} />
      <ul>
        <CreateScoreList />
      </ul>
      <button
        className="scoreButton"
        type="button"
        onClick={() => {
          setGameLevel(1);
          setScore([]);
        }}
      >
        Start Over
      </button>
    </div>
  );
};
