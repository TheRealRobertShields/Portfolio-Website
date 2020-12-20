import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createPart, updatePart } from '../ACTIONS/ACTIONS.parts';

const FormPart = ({ currentId, setCurrentId }) => {
    const [partData, setPartData] = useState({ _id: '', name: '', category: '' });

    const part = useSelector(state => currentId ? state.parts.find((p) => p._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (part) {
            setPartData(part);
        }
    }, [part])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate that inputs are not empty
        var idInput = document.getElementById('_id');
        var nameInput = document.getElementById('name');
        var categoryInput = document.getElementById('category')
        if (!idInput.value || !nameInput.value || !categoryInput.value) {
            document.querySelector('.form-container').style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.querySelector('.form-container').style.transform = 'scale(1)';
            }, 150);
        }
        else {
            // If inputs are properly filled out
            if (currentId) {
                dispatch(updatePart(currentId, partData));
            } else {
                dispatch(createPart(partData));
            }
            document.querySelector('.form-container').classList.remove('showForm');
            document.querySelector('.main-overlay').classList.remove('dimBackground');
            clear();
        }
    };

    const clear = () => {
        setPartData({ _id: '', name: '', category: '' });
        document.querySelector('.form-container').style.transform = 'scale(1.2)';
        setTimeout(() => {
            document.querySelector('.form-container').style.transform = 'scale(1)';
        }, 150);
    }; 

    const focusInput = (e) => {
        e.target.classList.add('focus');
        e.target.nextSibling.classList.add('focus');
    }
    const blurInput = (e) => {
        if (e.target.value.trim() === '') {
            e.target.classList.remove('focus');
            e.target.nextSibling.classList.remove('focus');
        }   
    }

    return (
        <div className='form-container'>
            <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}> 
                <h1>{currentId ? `Edit ${currentId}` : 'Create a Part'}</h1>
                <div className='juro-input-container'>
                    <input type='text' id='_id' name='_id' className='juro-input' 
                           onFocus={focusInput} 
                           onBlur={blurInput}
                           value={partData._id}
                           style={{textTransform:'uppercase'}}
                           onChange={(e) => setPartData({ ...partData, _id: e.target.value })} />
                    <label htmlFor='_id' className='juro-label'>Part Number</label>
                </div>
                <div className='juro-input-container'>
                    <input type='text' id='name' name='name' className='juro-input' 
                           onFocus={focusInput} 
                           onBlur={blurInput}
                           value={partData.name}
                           onChange={(e) => setPartData({ ...partData, name: e.target.value })}  />
                    <label htmlFor='name' className='juro-label'>Part Name</label>
                </div>
                <div className='juro-input-container'>
                    <input type='text' id='category' name='category' className='juro-input' 
                           onFocus={focusInput} 
                           onBlur={blurInput}
                           value={partData.category}
                           onChange={(e) => setPartData({ ...partData, category: e.target.value })}  />
                    <label htmlFor='category' className='juro-label'>Category</label>
                </div>
                <div className='form-btns'>
                    <button type='submit' className='btn-submit'>Submit</button>
                    <button type='button' onClick={clear} className='btn-clear'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default FormPart;