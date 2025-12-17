import React, { useEffect, useState } from 'react';
import './Skills.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import AddBtn from '../Common/AddBtn';
import Line from '../Common/Line';
import SkillsInput from '../Common/SkillsInput';
import Footer2 from '../components/Footer2';
import './SkillsMob.css';
import {supabase} from '../Supabase';


const Skills = () => {
    const [loading, setLoading] = useState(true);
    const [skills,setSkills] = useState("");
    const [DashHero,setDashHero] = useState("");
    
    useEffect(()=>{


        async function getPageData(){
            const res = await supabase.from("Skills").select("*");
            const DashHeroRes = await supabase.from("DashHero").select("*");
            
        
            setSkills(res.data);
            setDashHero(DashHeroRes.data);
            setLoading(false);
            }
                
            getPageData()



    },[])
    if (loading) return <p>Loading....</p>;

    return (<>
    {console.log(skills)}

    <Nav />

     <div className='dashboard_skills_all'>

        <Aside />

        <div className='content_skills_all'>

        
        {
            DashHero
            .filter(DashHero => DashHero.id === 3)
            .map((DashHero)=>{

            return  <>
            <Title title={DashHero.Title} subtitle={DashHero.Subtitle} />
            </>

            })
        }


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

        {
        skills.map((skill)=>{

        return  <>
        <SkillsInput Skills_img={skill.Icon} Name={skill.Name} type={skill.Type} level='Expert' category='UI/UX' Status='Published' dateUpdate='12/12/2025' />
        <Line />
        </>


        })
        }

        
            


        </div>

        <Footer2 />

        </div>



     </div>
     

    </>);
}
 
export default Skills;