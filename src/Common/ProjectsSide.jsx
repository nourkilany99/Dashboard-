import React from 'react';
import './ProjectsSide.css';

const ProjectsSide = ({ projectName, onClick }) => {
    return (
        <div className='projects_side_item' onClick={onClick}>
            <p>{projectName}</p>
        </div>
    );
};

 
export default ProjectsSide;