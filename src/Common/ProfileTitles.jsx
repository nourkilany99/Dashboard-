import React from 'react';
import './ProfileTitles.css';
import Toggle from '../Common/Toggle'


const ProfileTitles = (props) => {
    return (<> 

    <div className='profiletitles_div'>
 
    <h2>{props.title}</h2>
    <Toggle />

    </div>


    </>);
}
 
export default ProfileTitles;