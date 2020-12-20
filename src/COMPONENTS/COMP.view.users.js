import React, { /*useState,*/ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import User from './COMP.view.user';
import UserForm from './COMP.form.user';
import addImg from '../images/addToList.png';
import { getUsers } from '../ACTIONS/ACTIONS.users';

const ViewUsers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch])

    const users = useSelector(state => state.users);
    
    // // Sort by category, then by name
    users.sort((a,b) => {
        return a.org - b.org || a._id.localeCompare(b._id);
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
        !users.length ? 
            <div>
                <div className='nav'><div className='link-group' onClick={showForm}><img src={addImg} alt='add' /><h3>SIGN UP</h3></div></div>
                <UserForm />
                <div className='main-overlay' onClick={showBackground}></div>
                <div className='loadingDots'>
                    <div className='redDot'>.</div>
                    <div className='blueDot'>.</div>
                    <div className='greenDot'>.</div>
                </div>
            </div> : (
            <div className='wide'>
                <h1>USERS LIST</h1>
                <div className='nav'><div className='link-group' onClick={showForm}><img src={addImg} alt='add' /><h3>SIGN UP</h3></div></div>
                <div className='users-container'>
                    {users.map((user) => (
                            <User key={user._id} user={user} />
                    ))}
                </div>
                <UserForm />
                <div className='main-overlay' onClick={showBackground}></div>
            </div>
        )
    )
}

export default ViewUsers;