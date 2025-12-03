import React, { useState } from 'react';
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
import Footer2 from '../components/Footer2'

const ProjectManage = () => {

    const [selectedCategory, setSelectedCategory] = useState("Graphic design projects");

    const projectData = {
        "Graphic design projects": [project1, project2, project3],
        "UI/UX projects": [project2, project3],
        "Web developing": [project1],
        "Videography": [project3],
        "Photography": [project1, project3],
    };

    return (
        <>
            <Nav />
            <div className='dashboard_projects_all'>
                <Aside />

                <div className='content_skills_all'>
                    <div className='project_hero_d'>
                        <Title title='Projects Manager' subtitle='Managing all projects on your portfolio projects' />
                        <AddBtn title='Add New Project' />
                    </div>

                    <div className='extra_prjctsDiv'>

                        {/* ---- LEFT SIDEBAR ---- */}
                        <div className='projects_by_category'>
                            {Object.keys(projectData).map(category => (
                                <ProjectsSide key={category} projectName={category} onClick={() => setSelectedCategory(category)}/>
                            ))}
                        </div>

                        {/* ---- RIGHT POSTER AREA ---- */}
                        <div className='poster_all_work_div'>
                            {projectData[selectedCategory].map((poster, index) => (
                                <ProjectPoster key={index} ProjectPoster={poster} />
                            ))}
                        </div>

                    </div>

                    <Footer2 />
                </div>
            </div>
        </>
    );
}

export default ProjectManage;
