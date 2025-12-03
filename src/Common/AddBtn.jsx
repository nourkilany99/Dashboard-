import React from 'react';
import './AddBtn.css';
import AddBtncomm from '../Assets/AddIconComp.svg';

const AddBtn = (props) => {
    return (<>

    <button className='btn_add_common'>
        <img src={AddBtncomm} alt='AddBtn' className='btn_add_img' />
        <p className='btn_add_p'>{props.title}</p>
    </button>

    </>);
}
 
export default AddBtn;