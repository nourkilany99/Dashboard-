import React from 'react';
import './Aside.css';
import home_icon from '../Assets/home_icon.svg';
import Project_manager_icon from '../Assets/project_manager_icon.svg';
import gallery from '../Assets/Gallery.svg';
import blog_icon from '../Assets/blog_icon.svg';
import skills from '../Assets/skills_icon.svg';
import message_icon from '../Assets/message_icon.svg';
import category_icon from '../Assets/category_icon.svg';
import logout_icon from '../Assets/Logout_icon.png';
import { Link } from 'react-router-dom';
// import ProjectManage from



const Aside = () => {
    return (<>
    
    <aside>
        <div className='d1_aside'>

        <Link className='link-reset' to='/Skills'><button className='home_icon_btn'>
        <img src={home_icon} alt='home_icon' />
        <span className="tooltip">Home</span>
        </button></Link>

        <Link className='link-reset' to='/ProjectManage'><button className='project_icon_btn'>
        <img src={Project_manager_icon} alt='Project_manager_icon' />
        <span className="tooltip">Projects</span>
        </button></Link>

        <Link className='link-reset' to='/Skills'><button className='gallery_icon_btn'>
        <img src={gallery} alt='gallery_icon' />
        <span className="tooltip">Gallery</span>
        </button></Link>

        <Link className='link-reset' to='/Skills'><button className='skills_icon_btn'>
        <img src={skills} alt='skills_icon' />
        <span className="tooltip">Skills</span>
        </button></Link>

        <Link className='link-reset' to='/Skills'><button className='blog_icon_btn'>
        <img src={blog_icon} alt='blog_icon' />
        <span className="tooltip">Blog</span>
        </button></Link>

        <Link className='link-reset' to='../pages/Skills.jsx'><button className='message_icon_btn'>
        <img src={message_icon} alt='message_icon' />
        <span className="tooltip">Message</span>
        </button></Link>

        <Link className='link-reset' to='../pages/Skills.jsx'><button className='category_icon_btn'>
        <img src={category_icon} alt='category_icon' />
        <span className="tooltip">Category</span>
        </button></Link>

        </div>


        <button className='logout_icon_btn'>
        <img src={logout_icon} alt='logout_icon' />
        <span className="tooltip">Logout</span>
        </button>
    </aside>
    </> );
}

export default Aside;