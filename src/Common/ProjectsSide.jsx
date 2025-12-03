import React from 'react';
import './ProjectsSide.css';

const ProjectsSide = (props) => {
    return (<>

    <button className='btn_projects_cat'>
        <p>{props.projectName}</p>
    </button>
    

    </>);
}
 
export default ProjectsSide;