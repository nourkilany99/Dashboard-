import React from 'react';
import './QuickAction_btn.css';

import './QuickActionMob.css';


const QuickAction_btn = (props) => {
    return (<>

    <button className='btn_quickAction'>
        <img src={props.icon} alt='icons' className='icons_quick' />
        <p>{props.action}</p>
    </button>

     </> );
}
 
export default QuickAction_btn;