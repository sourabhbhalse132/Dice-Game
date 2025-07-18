import React from "react";

const TotalScore = ({ score }) => {
  return (
    <>
      <div className="Total-Score">
        <h1 className="Heading">{score}</h1>
        <p className="PlainText">Total Score</p>
      </div>
    </>
  );
};

export default TotalScore;
