import { useEffect, useState, useContext } from "react";
import { ScoreContext } from "../globalManagement/scoreContext";

export const CreateTimer = ({ gameLevel }) => {
  const [time, setTime] = useState(0);
  const [score, setScore] = useContext(ScoreContext);
  const [firstTime, setFirstTime] = useState(new Date().getTime());

  useEffect(() => {
    setFirstTime(new Date().getTime());
    const timerId = setInterval(() => {
      UpdateTimer();
    }, 10);

    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (gameLevel !== 1) {
      const newScoreArray = score;
      newScoreArray[gameLevel - 2].time = time;
      setScore(newScoreArray);
    } else {
      setFirstTime(new Date().getTime());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameLevel]);

  const UpdateTimer = () => {
    const newTime = new Date().getTime();
    const elapsedTime = newTime - firstTime;

    const mil = Math.floor(elapsedTime / 1) % 60;
    const sec = Math.floor(elapsedTime / 1000) % 60;
    const min = Math.floor(elapsedTime / 1000 / 60);

    const convertedTime =
      LeadingZero(min) + ":" + LeadingZero(sec) + ":" + LeadingZero(mil);

    setTime(convertedTime);
  };

  const LeadingZero = (num) => {
    return (num < 10 ? "0" : "") + num;
  };

  return <p className="timerText">{time}</p>;
};
