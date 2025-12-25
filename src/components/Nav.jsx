import React from 'react';
import './Nav.css';
import User_img from '../Assets/navMe.svg';
import search_icon from '../Assets/search_icon.svg';
import notification_icon from '../Assets/Notification_icon.svg';
import night_icon from '../Assets/moon_icon.svg';
import './MobileComp.css'
import { Link } from 'react-router-dom';



const Nav = () => {
    return (<>

    <nav>
        <div className='nav_d1'>
        <Link className="link-reset" to="/Profile" ><img src={User_img} alt='user_img' className='user_img' /></Link>
        <p className='welcome_msg'>Some new ideas<br/>They're waiting for you, Nour!</p>
        </div>

        <div className='nav_d2'>
            <div className='TimeDiv'>
            <p className='Time_nav'>22:03:11 PM</p>
            </div>

            <div className='last_login_Div'>
            <p className='Last_login_nav'>Last Login: 21/10</p>
            </div>
            
            <button className='search_icon_div'>
            <img src={search_icon} alt='search_icon' className='icon_search' />
            </button>

            <button className='notification_icon_div'>
            <img src={notification_icon} alt='notification_icon' className='notification_icon' />
            </button>

            <button className='night_icon_div'>
            <img src={night_icon} alt='night_icon' className='night_icon' />
            </button>
        </div>


    </nav>

    </>);
}
 
export default Nav;