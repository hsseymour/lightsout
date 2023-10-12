import { useContext } from "react";
import { ScoreContext } from "../globalManagement/scoreContext";

export const CreateScoreList = () => {
  // eslint-disable-next-line no-unused-vars
  const [score, _] = useContext(ScoreContext);

  return score.map((score, index) => (
    <li key={index}>
      <p>
        Level {score.level}: <span>{score.time}</span>
      </p>
    </li>
  ));
};
