import React from 'react';

const User = ({ user }) => {

    var nameLower = user._id.substr(0, user._id.indexOf('@')).replace('.', ' ');
    var initial1 = nameLower.charAt(0).toUpperCase();
    var initial2 = nameLower.charAt(nameLower.indexOf(' ') + 1).toUpperCase();

    var nameProper = initial1 + nameLower.substr(1, nameLower.indexOf(' ')) + initial2 + nameLower.substr(nameLower.indexOf(' ') + 2);

    return (
        <div className='user-container'>
            <h2 className='user-name'>{nameProper}</h2>
            <p className='user-email'>{user._id}</p>
            <h4 className='user-org'>{user.org}</h4>
        </div>
    )
}

export default User;