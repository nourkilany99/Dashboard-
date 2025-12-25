import React from 'react';
import './DeleteBtn.css';

const DeleteBtn = ({ icony, action, onClick }) => {
    return ( 
        <button className="Delete2Btn" onClick={onClick}>
            <img src={icony} alt="icon" />
            <p>{action}</p>
        </button>
    );
};
 
export default DeleteBtn;
