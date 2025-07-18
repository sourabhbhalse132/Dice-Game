import React from "react";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import Footer from "./components/Footer";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
      {/* <Footer /> */}
      <Footer onHomeClick={() => setIsGameStarted(false)} />
    </>
  );
};

export default App;
