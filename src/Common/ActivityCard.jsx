import React from 'react';
import './ActivityCard.css';
import './ActivityMob.css';

const ActivityCard = (props) => {
    return (<> 
    <div className='activityCard_all'>
        <div className='activityCard_user'>
            <img src={props.activimg} alt='activityUserImg' className='activity_img_user' />
            <p className='name_activity'>{props.activ_name}</p>
        </div>

        <div className='extra_activ_div'>
        <p className='the_activity'>{props.theActivity}</p>
        </div>

        <p className='date_activity'>{props.activityDate}</p>
    </div>

    </>);
}
 
export default ActivityCard;