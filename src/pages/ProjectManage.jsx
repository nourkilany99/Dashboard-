import React from 'react';
import './ProjectManage.css'
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import AddBtn from '../Common/AddBtn';
import ProjectsSide from '../Common/ProjectsSide';
import ProjectPoster from '../Common/ProjectPoster';
import project1 from '../Assets/project1.svg';

const ProjectManage = () => {
    return (<>

     <Nav />

     <div className='dashboard_projects_all'>

     <Aside />

      <div className='content_skills_all'>

        <div className='project_hero_d'>
        <Title title='Projects Manager' subtitle='Managing all projects on your portfolio projects' />
        <AddBtn title='Add New Project' />
        </div>

        <div className='extra_prjctsDiv'>


        <div className='projects_by_category'>
            <ProjectsSide projectName='Graphic design projects' />
            <ProjectsSide projectName='UI/UX projects' />
            <ProjectsSide projectName='Web developing' />
            <ProjectsSide projectName='Videography' />
            <ProjectsSide projectName='Photography' />
        </div>

        <div className='poster_all_work_div'>
            <ProjectPoster ProjectPoster={project1} />
        </div>


        
        </div>

     </div>





     </div>


    </> );
}
 
export default ProjectManage;