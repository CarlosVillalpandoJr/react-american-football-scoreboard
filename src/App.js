//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"; 
import "./App.css";
import BottomRow from "./BottomRow";
import HomeButtons from "./components/HomeButtons"
import AwayButtons from "./components/AwayButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const addHomeTouchdown = () => setHomeScore(homeScore + 7);
  const addAwayTouchdown = () => setAwayScore(awayScore + 7);

  const addHomeFieldGoal = () => setHomeScore(homeScore + 3);
  const addAwayFieldGoal = () => setAwayScore(awayScore + 3);

  const resetHome = () => setHomeScore(0)
  const resetAway = () => setAwayScore(0)


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons 
          addHomeTouchdown={addHomeTouchdown} 
          addHomeFieldGoal={addHomeFieldGoal} 
          resetHome={resetHome}  
        />
        <AwayButtons 
          addAwayTouchdown={addAwayTouchdown} 
          addAwayFieldGoal={addAwayFieldGoal} 
          resetAway={resetAway}
        />
      </section>
    </div>
  );
}

export default App;
