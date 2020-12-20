import React from 'react';

import fotosImg from '../images/camera.png';
import palletImg from '../images/pallet.png';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div className='projects-container'>
                <a href='https://fotos-robertshields.netlify.com/viewposts' target="_blank" rel="noopener noreferrer">
                    <div className='social-link'><img src={fotosImg} alt='fotos' /><h5>Fotos</h5></div>
                </a>
                <p>An instagram clone.</p>
                
                <a href='https://pallet-robertshields.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                    <div className='social-link'><img src={palletImg} alt='pallet' /><h5>Pallet</h5></div>
                </a>
                <p>A form generator for auditing and transferring items between subinventories.</p>
            </div>
        </div>
    )

}

export default Projects;