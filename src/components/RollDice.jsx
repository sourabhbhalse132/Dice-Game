import { useState } from "react";
import ShowRules from "./ShowRules";

const RollDice = ({ selectedNumber, score, setScore, setSelectedNumber }) => {
  const [currentDice, setCurrentDice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [message, setMessage] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(false);

  const RollDiceImg = () => {
    if (!selectedNumber) {
      setMessage("Please select a number first!");
      setTimeout(() => setMessage(""), 2500);
      return;
    }

    setIsRolling(true);
    setMessage("");

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(randomNum);
      setIsRolling(false);

      if (selectedNumber === randomNum) {
        setScore((prev) => prev + randomNum);
        setMessage("You Win!");
        setShowWinPopup(true);
        setSelectedNumber(null);
        setTimeout(() => setShowWinPopup(false), 3000);
      } else {
        setScore(0);
        setMessage("Bad luck, try again!");
      }
    }, 400);
  };

  return (
    <>
      {/* Select Number Info (above dice) */}
      <div
        style={{ textAlign: "center", marginBottom: "8px", fontSize: "20px" }}
      >
        {selectedNumber
          ? `Selected Number: ${selectedNumber}`
          : "Please select a number"}
      </div>

      {/* Message display (above dice) */}
      {message && (
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginBottom: "10px",
            color: message.includes("Win") ? "green" : "red",
          }}
        >
          {message}
        </div>
      )}

      {/* Dice */}
      <div className="RoleDice">
        <div className="DiceN01" onClick={RollDiceImg}>
          <img
            src={`./Dice/DiceN0${currentDice}.jpg`}
            alt="DiceImage"
            className={isRolling ? "shake" : ""}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      </div>

      <div className="DiceText">
        <p>Click on Dice to roll</p>
      </div>
      <div className="GamePlayBtns">
        <button
          className="reset"
          onClick={() => {
            setScore(0);
            setMessage("");
            setSelectedNumber(null);
          }}
        >
          Reset
        </button>

        <button className="reset" onClick={() => setShowRules(!showRules)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </div>

      {showRules && <ShowRules />}
    </>
  );
};

export default RollDice;
