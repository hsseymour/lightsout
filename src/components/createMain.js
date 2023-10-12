import { useState } from "react";
import { GridContext } from "../globalManagement/gridContext";
import { ScoreContext } from "../globalManagement/scoreContext";
import { CreateGrid } from "./createGrid";
import { GenerateGrid } from "../functions/generateGridArray";
import { AssignNeigbours } from "../functions/assignNeighbours";
import { CreateResetButton } from "./createResetButton";
import { CreateScoreCard } from "./createScoreCard";

export const CreateMain = () => {
  const [gameLevel, setGameLevel] = useState(1);
  const [grid, setGrid] = useState(AssignNeigbours(GenerateGrid(gameLevel)));
  const score = useState([]);

  const handleGameLevelChange = (newLevel) => {
    setGameLevel(newLevel);
    setGrid(AssignNeigbours(GenerateGrid(newLevel)));
  };

  return (
    <section>
      <header>
        <h1 className="pageTitle">Lights Out</h1>
      </header>
      <main>
        <div className="container">
          <ScoreContext.Provider value={score}>
            <div className="center-div">
              <div>
                <h3 className="levelText">Level {gameLevel}</h3>
              </div>
              <GridContext.Provider value={[grid, setGrid]}>
                <CreateGrid gls={[gameLevel, handleGameLevelChange]} />
                <CreateResetButton />
              </GridContext.Provider>
            </div>
            <div className="right-div">
              <aside>
                <CreateScoreCard
                  gameLevel={[gameLevel, handleGameLevelChange]}
                />
              </aside>
            </div>
          </ScoreContext.Provider>
        </div>
      </main>
    </section>
  );
};
