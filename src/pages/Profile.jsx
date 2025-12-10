import React from 'react';
import './Profile.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title2 from '../Common/Title2';
import AddBtn from '../Common/AddBtn';
import SaveBtn from '../Common/SaveBtn';
import CancelBtn from '../Common/CancelBtn';
import ProfileTitles from '../Common/ProfileTitles';
import EditBtn from '../Common/EditBtn';
import Deletebtn2 from '../Common/Deletebtn2';
import edit from '../Assets/blog_icon.svg';
import delety from '../Assets/deleteicon.svg'
import Contactedit from '../Common/Contactedit';

const Profile = () => {
    return (<>
    <Nav />

    <div className='dashboard_profile_all'>

        <Aside />

        <div className='content_profile_all'>





            <div className='profile_changes1'>

                <div className='profile_title_div'>

                    <Title2 title='Profile Settings Page' />

                    <div className='actions_profile_div'>
                    <AddBtn width="10vw" height='5vh' title='Add section'  />
                    <SaveBtn width="10vw" height='5vh' title='Save'  />
                    <CancelBtn width="10vw" height='5vh' title='Cancel' />
                    </div>

                </div>


                <div className='div_settings_control'>

                    <div className='edit_profile1_info'>

                        <ProfileTitles title='About Me' />

                        <div className='about_profile_div'>
                            <div className='about_profile'>
                                <p>I’m Nour Elkilany,
                                    a UI/UX designer 
                                    focused on creating 
                                    seamless digital experiences
                                    that are clean, intuitive, 
                                    and user-centered. I combine
                                    creativity with strategic 
                                    thinking to design products 
                                    that look great and work 
                                    even bett......
                                </p>
                            </div>

                            <div className='about2_profile'>
                                <EditBtn icony={edit} action="Edit" />
                                <Deletebtn2 icony={delety} action="Delete" />
                            </div>
                        </div>


                    </div>


                    <div className='edit_profile2_info'>

                        <ProfileTitles title='Contact Information' />

                        <div className='about_contact_div'>

                            
                        <Contactedit title='Email' detail='info@nourelkilany.com' />
                        <Contactedit title='Phone' detail='01000110754' />
                        <Contactedit title='Behance' detail='Nourkilany33' />  
                            


                            
                        </div>


                    </div>

                    

                </div>

            </div>










        </div>

    </div>

    </>);
}
 
export default Profile;