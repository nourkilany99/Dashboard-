import React from 'react';
import './Contactedit.css';
import EditBtn from './EditBtn';
import edit from '../Assets/blog_icon.svg'

const Contactedit = (props) => {
    return (<> 

    <div className='Contactedit_card'>

        <div className='Contactedit_card_d1'>
            <h2>{props.title}</h2>

            <div className='extra_editbtn'>
            <EditBtn action='edit' icony={edit} />
            </div>
        </div>

        <div className='Contactedit_card_d2'>
            <p>{props.detail}</p>
        </div>
    

    </div>
        
    </>);
}
 
export default Contactedit;