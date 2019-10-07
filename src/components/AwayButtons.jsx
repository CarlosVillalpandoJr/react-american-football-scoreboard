import React from 'react';

const AwayButtons = (props) => {
    return (
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={props.addAwayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={props.addAwayFieldGoal}>Away Field Goal</button>
          <button onClick={props.resetAway}>Reset Away Score</button>
        </div>
    )
}

export default AwayButtons;