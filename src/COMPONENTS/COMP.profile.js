import React from 'react';
import profileImg from '../images/facelogo.png';
import StatBar from './COMP.statbar';

const Profile = () => {
    return (
        <>
        <div className='profile'>
            <h1>Robert Shields</h1>
            <div className='profile-container'>
                <img src={profileImg} alt='profile'/>
                <div className='profile-stats'>
                    <h1>Frontend</h1>
                    <StatBar statName='HTML' skillLevel={100}/>
                    <StatBar statName='CSS' skillLevel={90}/>
                    <StatBar statName='JavaScript' skillLevel={80}/>
                </div>
                <div className='profile-stats'>
                    <h1>Backend</h1>
                    <StatBar statName='SQL' skillLevel={60}/>
                    <StatBar statName='NoSQL' skillLevel={80}/>
                    <StatBar statName='Express.js' skillLevel={60}/>
                </div>
            </div>
        </div>
            
            
        </>
    )
}

export default Profile;