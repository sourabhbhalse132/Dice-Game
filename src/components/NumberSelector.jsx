import { useState } from "react";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  // const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <>
      <div className="GamePlayPage">
        <div className="selectN">
          <div className="NumberSelector">
            {arrNumber.map((value, i) => (
              <p
                onClick={() => setSelectedNumber(value)}
                className={`box ${value === selectedNumber ? "selected" : ""}`}
                key={value}
              >
                {value}
              </p>
            ))}
          </div>
          <p className="SelectNumberText">Select Number</p>
        </div>
      </div>
    </>
  );
};

export default NumberSelector;
