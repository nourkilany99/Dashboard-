import React from 'react';
import './projectPoster.css'
import EditBtn from './EditBtn';
import editproject from '../Assets/blog_icon.svg';
import addproject from '../Assets/AddIconComp.svg';
import deleteproject from '../Assets/deleteicon.svg'
import DeleteBtn from './DeleteBtn';

const ProjectPoster = (props) => {
    return (<> 

    <div className='div_all_project_poster'>
        <img className='project_poster_img' src={props.ProjectPoster} alt='ProjectPoster' />

        <div className='edit_project_poster_div'>

            <div className='edit_add_div'>
            <EditBtn icony={editproject} action='edit'  />
            <EditBtn icony={addproject} action='Add project' />
            </div>

            <DeleteBtn icony={deleteproject} action='Delete' />

        </div>
    </div>

    </>);
}
 
export default ProjectPoster;