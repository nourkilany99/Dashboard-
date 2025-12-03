import React from 'react';
import './EditBtn.css';

const EditBtn = (props) => {
    return ( 
        <>

        <button className='EditBtn'>
            <img src={props.icony} alt='icon' />
            <p>{props.action}</p>
        </button>
        
        </>
     );
}
 
export default EditBtn;