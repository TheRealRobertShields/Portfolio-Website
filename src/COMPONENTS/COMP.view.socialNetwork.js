import React from 'react';
import githubImg from '../images/github.png';
import linkedinImg from '../images/linkedin.png';
import gmailImg from '../images/gmail.png';

const SocialNetwork = () => {
    return (
        <div>
            <h1>Social Network</h1>
            <div className='socials-container'>
                <a href='https://github.com/TheRealRobertShields' target="_blank" rel="noopener noreferrer">
                    <div className='social-link'><img src={githubImg} alt='github' /><h5>GitHub</h5></div>
                </a>
                <a href='https://www.linkedin.com/in/robert-shields-4b70541b6/' target="_blank" rel="noopener noreferrer">
                    <div className='social-link'><img src={linkedinImg} alt='linkedin' /><h5>LinkedIn</h5></div>
                </a>
                <a href='mailto:robert.shields.dev@gmail.com' target="_blank" rel="noopener noreferrer">
                    <div className='social-link'><img src={gmailImg} alt='gmail' /><h5>Gmail</h5></div>
                </a>
            </div>
        </div>
    )
}

export default SocialNetwork;