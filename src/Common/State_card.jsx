import React from 'react';
import './State_card.css';
import explore_arrow from '../Assets/explore_arrow.svg';


const State_card = (props) => {
    return (<>
    <div className='card_state_all'>
        <div className='card_title_div'>
         <p className='title_card'>{props.title}</p>
         <img src={explore_arrow} alt='explore_arrow' className='explore_arrow' />
        </div>

        <h1 className='number_card'>{props.number}</h1>
        <p className='note_card'>{props.note}</p>
    </div>

    </>);
}
 
export default State_card;