import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setError("");
  };

  return (
    <div className="gameplay-wrapper">
      <header className="gameplay-header">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </header>
      
      <RollDice
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        setScore={setScore}
        setError={setError}
        resetScore={resetScore}
      />
    </div>
  );
};

export default GamePlay;
