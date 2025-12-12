import React from 'react';
import './Message.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import search from '../Assets/search_icon.svg';
import Dropdown from '../Common/DropDown_btn';
import Messageinbox from '../Common/Message_inbox';
import message from '../Assets/message_icon.svg';
import Footer from '../components/Footer'

const Message = () => {
    return (<> 

    <Nav />

    <div className='dashboard_message_all'>

        <Aside />

        <div className='content_message_all'>

            <Title title='Messages Page' />

            <div className='all_messages_boxs'>

                <div className='messages_box1'>

                    <button className='search_btn'>
                        <img src={search} alt='search' />
                        <p>Search</p>
                    </button>

                    <Dropdown label='All messages' width='94%' />

                    <div className='all_msgs_div'>
                        <p>All messages:</p>
                        <Messageinbox name='Nour Elkilany' time='02:03 am' message='Logo proposal came...' />
                        <Messageinbox name='Ahmed Hesham' time='04:03 am' message='Logo proposal came...' />
                        <Messageinbox name='Jana Ahmed' time='13:03 am' message='Logo proposal came...' />
                    </div>
                </div>

                <div className='messages_box2'>



                    <div className='noMsg_div'>
                    <img src={message} alt='message' className='mesage_icon' />
                    <p className='mesage_p_read'>Read all your messages clearly here</p>
                    </div>

                    <p className='link_problem'>Report a problem? </p>

                </div>

            </div>

            <Footer />



        </div>
    </div>



    </>);
}
 
export default Message;