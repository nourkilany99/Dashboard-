import React from 'react';
import './Message_inbox.css';

const Message_inbox = (props) => {
    return (<> 

    <div className='Message_inbox'>

    <div className='Message_ti_name'>
        <h3 className='name_msg'>{props.name}</h3>
        <p className='time_msg'>{props.time}</p>
    </div>

    <div className='Message'>
        <p>{props.message}</p>
    </div>

    </div>
    </>);
}
 
export default Message_inbox;