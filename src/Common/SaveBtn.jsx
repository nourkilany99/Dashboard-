import React from 'react';
import './SaveBtn.css';
import Saveicon from '../Assets/SaveIcon.svg';

const SaveBtn = ({ title, width ,height }) => {
    return (<>

    <button className='btn_save_common'style={{ width: width , height:height }}  >

            <img src={Saveicon} alt='saveicon' className='btn_save_img' />
            <p className='btn_save_p'>{title}</p>
            
    </button>

    </>);
}
 
export default SaveBtn;