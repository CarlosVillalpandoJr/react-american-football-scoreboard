import React from 'react';

const HomeButtons = (props) => {
    console.log('Props in HomeButtons: ', props);
    return (
        <div className='homeButtons'>
          <button className="homeButtons__touchdown" onClick={props.addHomeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={props.addHomeFieldGoal}>Home Field Goal</button>
          <button onClick={props.resetHome}>Reset Home Score</button>
        </div>
    )
}

export default HomeButtons; 