import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../ACTIONS/ACTIONS.users';

const FormUser = () => {
    const [userData, setUserData] = useState({ org: '', _id: '', password: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById('_id').value.indexOf('@dish.com') === -1) {
        } else {
            dispatch(createUser(userData));
            document.querySelector('.form-container').classList.remove('showForm');
            document.querySelector('.main-overlay').classList.remove('dimBackground');
        }
    };

    const clear = (e) => {
        e.preventDefault();
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
                <h1>Create Account</h1>
                <div className='juro-input-container'>
                    <input type='text' id='org' name='org' className='juro-input' 
                           onFocus={focusInput} 
                           onBlur={blurInput}
                           value={userData.org}
                           onChange={(e) => setUserData({ ...userData, org: e.target.value })} />
                    <label htmlFor='org' className='juro-label'>Org Number</label>
                </div>
                <div className='juro-input-container'>
                    <input type='text' id='_id' name='_id' className='juro-input' 
                           onFocus={focusInput} 
                           onBlur={blurInput}
                           value={userData._id}
                           style={{textTransform:'lowercase'}}
                           onChange={(e) => setUserData({ ...userData, _id: e.target.value })}  />
                    <label htmlFor='_id' className='juro-label'>Dish Email</label>
                </div>
                <div className='juro-input-container'>
                    <input type='text' id='password' name='password' className='juro-input' 
                           onFocus={focusInput} 
                           onBlur={blurInput}
                           value={userData.password}
                           onChange={(e) => setUserData({ ...userData, password: e.target.value })}  />
                    <label htmlFor='password' className='juro-label'>Password</label>
                </div>
                <div className='form-btns'>
                    <button type='submit' className='btn-submit'>Submit</button>
                    <button onClick={clear} className='btn-clear'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default FormUser;