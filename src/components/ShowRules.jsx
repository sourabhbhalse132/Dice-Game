import React from "react";

const ShowRules = () => {
  return (
    <>
      <div className="ShowRules">
        <div className="ShowRulesCard">
          {" "}
          <div className="ShowRulesH2">
            <h2>How to Play Dice Game</h2>
          </div>
          <div className="RulesText">
            <p>Select any number</p>
            <p>Click on Dice image</p>
            <p>
              After click on dice if selected number is equal to dice number yu
              will get same point as dice
            </p>
            <p>if you get wrong guess then 2 point will be deducted</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowRules;
