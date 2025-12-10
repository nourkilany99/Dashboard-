import React from 'react';
import './EditUserProfile.css';
import userimgEdit from '../Assets/navMe.svg'
import EditBtn from './EditBtn';
import upload from '../Assets/upload_icon.svg';
import DeleteBtn from './Deletebtn2';
import delet from '../Assets/deleteicon.svg'

const EditUserProfile = () => {
    return (<> 

    <div className='EditUserProfile_all'>

        <div  className='UserProfile_img_div'>
            <img src={userimgEdit} alt='userimgEdit' className='userimgEdit' />
        </div>

        <div className='UserProfile_img_div2'>
        <EditBtn icony={upload} action="Upload your photo" />
        <DeleteBtn icony={delet} action="Delete your photo " />
        </div>
    </div>

    </>);
}
 
export default EditUserProfile;