import React from 'react';
import './CancelBtn.css';
import cancelbtn from '../Assets/CancelIcon.svg'

const CancelBtn = ({ title, width ,height }) => {
    return (<>

        <button className='btn_cancel_common'style={{ width: width , height:height }}  >

            <img src={cancelbtn} alt='cancelBtn' className='btn_cancel_img' />
            <p className='btn_cancel_p'>{title}</p>
            
        </button>

    </>);
}
 
export default CancelBtn;