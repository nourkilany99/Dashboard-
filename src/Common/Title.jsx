import React from 'react';
import './Title.css';
import './MobileCommn.css'

const Title = (props) => {
    return (<>

    <div className='extra_title_div'>
     <h1 className='h1_state'>{props.title}</h1>
     <p className='p_state'>{props.subtitle}</p>
    </div>
    </> );
}
 
export default Title;