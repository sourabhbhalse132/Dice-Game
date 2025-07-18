import React from "react";

const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="heroSection">
        <div className="image">
          <img src="./mainDice.png" alt="Dice" />
        </div>
        <div className="text">
          <h1>DICE GAME</h1>
          <button className="btn" onClick={toggle}>
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default StartGame;
