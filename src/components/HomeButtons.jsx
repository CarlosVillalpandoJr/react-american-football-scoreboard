import React from 'react';

const HomeButtons = ( {addHomeTouchdown, addHomeFieldGoal} ) => {
    return (
        <div className='homeButtons'>
          <button className="homeButtons__touchdown" onClick={addHomeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={addHomeFieldGoal}>Home Field Goal</button>
        </div>
    )
}

export default HomeButtons; 