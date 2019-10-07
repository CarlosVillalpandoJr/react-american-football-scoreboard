import React from 'react';

const AwayButtons = ( {addAwayTouchdown, addAwayFieldGoal, resetAway} ) => {
    return (
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={addAwayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={addAwayFieldGoal}>Away Field Goal</button>
          <button onClick={resetAway}>Reset Away Score</button>
        </div>
    )
}

export default AwayButtons;