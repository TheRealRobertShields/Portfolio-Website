import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getParts } from '../ACTIONS/ACTIONS.parts';
import { useSelector } from 'react-redux';
import Part from './COMP.view.part';
import PartForm from './COMP.form.part';
import addImg from '../images/addToList.png';

const ViewParts = () => {

    const [ currentId, setCurrentId ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getParts());
    }, [currentId, dispatch])


    const parts = useSelector(state => state.parts);
    
    // Sort by category, then by name
    parts.sort((a,b) => {
        return a.category.localeCompare(b.category) || a.name.localeCompare(b.name) || a._id.localeCompare(b._id);
    });

    const showForm = () => { 
        document.querySelector('.form-container').classList.add('showForm');
        document.querySelector('.main-overlay').classList.add('dimBackground');
        
    }
    const showBackground = () => {
        document.querySelector('.form-container').classList.remove('showForm');
        document.querySelector('.main-overlay').classList.remove('dimBackground');
    }

    return (
        !parts.length ? 
        <div>
            <div className='nav'><div className='link-group' onClick={showForm}><img src={addImg} alt='add' /><h3>ADD</h3></div></div>
            <PartForm />
            <div className='main-overlay' onClick={showBackground}></div>
            <div className='loadingDots'>
                <div className='redDot'>.</div>
                <div className='blueDot'>.</div>
                <div className='greenDot'>.</div>
            </div>
        </div> : (
            <div className='wide relative'>
                <h1>PARTS LIST</h1>
                <div className='nav'><div className='link-group' onClick={showForm}><img src={addImg} alt='add' /><h3>ADD</h3></div></div>
                <div className='parts-container'>
                    {parts.map((part) => (
                            <Part key={part._id} part={part} setCurrentId={setCurrentId} />
                    ))}
                </div>
                <PartForm currentId={currentId} setCurrentId={setCurrentId} />
                <div className='main-overlay' onClick={showBackground}></div>
            </div>
        )
    )
}

export default ViewParts;