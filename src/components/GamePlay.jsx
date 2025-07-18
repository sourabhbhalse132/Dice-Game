import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <>
      <TotalScore score={score} />
      <NumberSelector
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />

      <RollDice
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        score={score}
        setScore={setScore}
      />
    </>
  );
};

export default GamePlay;
