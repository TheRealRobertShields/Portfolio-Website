import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePart } from '../ACTIONS/ACTIONS.parts';
import editImg from '../images/edit.png';
import deleteImg from '../images/delete.png';

const Part = ({ part, setCurrentId }) => {

    const dispatch = useDispatch();



    const showPopulatedForm = () => {
        setCurrentId(part._id);
        document.querySelector('.form-container').classList.add('showForm');
        document.querySelector('.main-overlay').classList.add('dimBackground');
        var populatedInputFields = document.querySelectorAll('.juro-input');
        populatedInputFields.forEach(inputField => {
            if (inputField)
                inputField.classList.add('focus');
            if (inputField.id === '_id')
                inputField.disabled = true;
        });
        var populatedInputLabels = document.querySelectorAll('.juro-label');
        populatedInputLabels.forEach(inputLabel => {
            if (inputLabel.textContent) {
                inputLabel.classList.add('focus');
            }
        });
    }
    return (
        <div className='part-container'>
            <p className='partDetail'>{part._id}</p>
            <p className='partDetail'>{part.name}</p>
            <p className={'partDetail category ' + (part.category === 'Mount' ? 'mount' : '')
                                                  + (part.category === 'Receiver' ? 'receiver' : '')
                                                  + (part.category === 'Connectivity' ? 'connectivity' : '')
                                                  + (part.category === 'Remote' ? 'remote' : '')
                                                  + (part.category === 'SHS' ? 'shs' : '')
                                                  + (part.category === 'LNBF' ? 'lnbf' : '')}>{part.category}</p>
            <div className='editPartBtn' onClick={showPopulatedForm}><img src={editImg} alt='edit part'/></div>
            <div className='editPartBtn' onClick={() => dispatch(deletePart(part._id))}><img src={deleteImg} alt='delete part'/></div>
        </div>
    )
    
    
}

export default Part;