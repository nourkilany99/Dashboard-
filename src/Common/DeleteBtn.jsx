import React from 'react';
import './DeleteBtn.css';

const DeleteBtn = (props) => {
    return ( 
        <>

        <button className='DeleteBtn'>
            <img src={props.icony} alt='icon' />
            <p>{props.action}</p>
        </button>
        
        </>
     );
}
 
export default DeleteBtn;