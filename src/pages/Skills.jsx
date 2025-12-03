import React from 'react';
import './Skills.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import AddBtn from '../Common/AddBtn';


const Skills = () => {
    return (<>

    <Nav />

     <div className='dashboard_skills_all'>

        <Aside />

        <div className='content_skills_all'>

        <Title title='Skills Management' subtitle='Organize and update all the skills displayed in your portfolio. Add new skills, group them by category, and manage their visibility.' />

        <div className='Skills_d1'>
            <div className='d1_d_skills'>
                <p className='d1_d_skills_h'>Showing:</p>
                <p className='d1_d_skills_p'>10 Appointments</p>
            </div>

            <AddBtn title='Add skills' />
        </div>

        </div>


     </div>

    </>);
}
 
export default Skills;