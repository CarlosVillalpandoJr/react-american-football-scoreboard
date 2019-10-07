import React from 'react';

const AwayButtons = ( {addAwayTouchdown, addAwayFieldGoal} ) => {
    return (
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={addAwayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={addAwayFieldGoal}>Away Field Goal</button>
        </div>
    )
}

export default AwayButtons;