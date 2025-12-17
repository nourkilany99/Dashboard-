import React, { useEffect, useState } from 'react';
import './ProjectManage.css'
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import AddBtn from '../Common/AddBtn';
import ProjectsSide from '../Common/ProjectsSide';
import ProjectPoster from '../Common/ProjectPoster';
import project1 from '../Assets/project1.svg';
import project2 from '../Assets/project2.svg';
import project3 from '../Assets/project3.svg';
import Footer2 from '../components/Footer2';
import AddProjectModal from '../Common/AddProjectModal';
import './mobileproject.css';
import {supabase} from '../Supabase';

const ProjectManage = () => {

    const [loading, setLoading] = useState(true);
    const [DashHero,setDashHero] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("Graphic design projects");

    const [showAddModal, setShowAddModal] = useState(false);

    const projectData = {
        "Graphic design projects": [project1, project2, project3],
        "UI/UX projects": [project2, project3],
        "Web developing": [project1],
        "Videography": [project3],
        "Photography": [project1, project3],
    };



    useEffect(()=>{
                
        
            async function getAllProjectManageAPI(){
                const res = await supabase.from("DashHero").select("*");
                setDashHero(res.data);
                setLoading(false);
            }
        
            getAllProjectManageAPI ()
        
        
        
            },[])
    if (loading) return <p>Loading....</p>;










    return (
        <>
            <Nav />
            <div className='dashboard_projects_all'>
                <Aside />

                <div className='content_skills_all'>
                    <div className='project_hero_d'>


                    {DashHero.filter(DashHero => DashHero.id === 1).map((DashHero)=>{
                    return  <>
                    <Title title={DashHero.Title} subtitle={DashHero.Subtitle} />
                    </>
                    })}

                    <AddBtn 
                    title='Add New Project'
                    onClick={() => setShowAddModal(true)}
                    />
                    </div>

                    <div className='extra_prjctsDiv'>






                        

                        <div className='projects_by_category'>
                            {Object.keys(projectData).map(category => (
                                <ProjectsSide 
                                    key={category} 
                                    projectName={category} 
                                    onClick={() => setSelectedCategory(category)}
                                />
                            ))}
                        </div>











                        <div className='poster_all_work_div'>
                            {projectData[selectedCategory].map((poster, index) => (
                                <ProjectPoster key={index} ProjectPoster={poster} />
                            ))}
                        </div>

                    </div>

                    <Footer2 />
                </div>
            </div>

            {/* ---- ADD PROJECT MODAL ---- */}
            <AddProjectModal 
                isOpen={showAddModal} 
                onClose={() => setShowAddModal(false)} 
            />
        </>
    );
}

export default ProjectManage;
