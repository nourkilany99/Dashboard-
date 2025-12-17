import React from 'react';
import './QuickAction_btn.css';

import './QuickActionMob.css';
import { useNavigate } from 'react-router-dom';


const QuickAction_btn = (props) => {
    const navigate = useNavigate();
    return (<>

    <button className='btn_quickAction' onClick={() => props.route && navigate(props.route)}>
        <img src={props.icon} alt='icons' className='icons_quick' />
        <p>{props.action}</p>
    </button>

     </> );
}
 
export default QuickAction_btn;