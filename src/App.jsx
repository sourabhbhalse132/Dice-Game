import React, { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import Footer from "./components/Footer";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="app-container">
      <main className="main-content">
        {isGameStarted ? (
          <GamePlay onHome={() => setIsGameStarted(false)} />
        ) : (
          <StartGame toggle={() => setIsGameStarted(true)} />
        )}
      </main>
      <Footer onHomeClick={() => setIsGameStarted(false)} />
    </div>
  );
};

export default App;