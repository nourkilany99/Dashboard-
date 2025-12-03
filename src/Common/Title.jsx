import React from 'react';
import './Title.css';
import './MobileCommn.css'

const Title = (props) => {
    return (<>

     <h1 className='h1_state'>{props.title}</h1>

    </> );
}
 
export default Title;