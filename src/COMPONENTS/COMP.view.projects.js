import React from 'react';

import fotosImg from '../images/camera.png';
import palletImg from '../images/pallet.png';

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                <div className='social-link'>
                    <a href='https://fotos-robertshields.netlify.app/viewallposts' target="_blank" rel="noopener noreferrer">
                        <img src={fotosImg} alt='fotos' /><h5>Fotos</h5>
                    </a>
                </div>
                <div className='social-link'>
                    <a href='https://pallet-robertshields.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                        <img src={palletImg} alt='pallet' /><h5>Pallet</h5>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Projects;