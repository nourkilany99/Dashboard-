import React from 'react';
import './AddBtn.css';
import AddBtncomm from '../Assets/AddIconComp.svg';


const AddBtn = ({ title, width ,height }) => {
    return (

        <button className='btn_add_common'style={{ width: width , height:height }}  >

            <img src={AddBtncomm} alt='AddBtn' className='btn_add_img' />
            <p className='btn_add_p'>{title}</p>
            
        </button>
        
    );
}

export default AddBtn;