import React from 'react';

const StatBar = (props) => {
    console.log(props)
    return (
        <div>
            <div className='stat'>{props.statName}</div>
            <div className='stat-red'>
                <div className='stat-green' style={{width: props.skillLevel + '%'}}></div>
            </div>
        </div>
    )
}

export default StatBar;