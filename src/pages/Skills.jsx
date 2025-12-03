import React from 'react';
import './Skills.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import AddBtn from '../Common/AddBtn';
import Line from '../Common/Line';
import SkillsInput from '../Common/SkillsInput';
import figma from '../Assets/fihma.svg';
import ps from '../Assets/ps.svg';
import Ai from '../Assets/AI.svg';
import vsc from '../Assets/VSC.svg';
import pr from '../Assets/PR.svg';
import problem_icon from '../Assets/Problem_icon.svg';
import blender from '../Assets/blender.svg';
import Footer2 from '../components/Footer2'


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

        <div className='line_div'>
            <Line />

            <div className='skills_form_inputs'>
                <h3>Skills name</h3>
                <h3>Type</h3>
                <h3>Level</h3>
                <h3>Category</h3>
                <h3>Status</h3>
                <h3>Last update</h3>
                <h3>Actions</h3>
            </div>

            <Line />

            <SkillsInput Skills_img={figma} Name='Figma' type='Tool' level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
            <Line />
            <SkillsInput Skills_img={ps} Name='Photoshop' type='Tool' level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
            <Line />
            <SkillsInput Skills_img={Ai} Name='Illustration' type='Tool' level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
            <Line />
            <SkillsInput Skills_img={vsc} Name='Visual studio code' type='Tool' level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
            <Line />
            <SkillsInput Skills_img={pr} Name='premiere' type='Tool' level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
            <Line />
            <SkillsInput Skills_img={problem_icon} Name='Problem solving' type='Soft skill' level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
            <Line />
            <SkillsInput Skills_img={blender} Name='Blender' type='Tool' level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
            <Line />
            


        </div>

        <Footer2 />

        </div>



     </div>
     

    </>);
}
 
export default Skills;