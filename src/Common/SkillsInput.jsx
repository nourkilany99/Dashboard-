import React from 'react';
import './SkillsInput.css';
import OptionsMenu from './OptionsMenu';
import Toggle from './Toggle';

const SkillsInput = (props) => {
    return (<>

    <div className='all_skills_input'>
        <div className='skill_name_d'>
            <img src={props.Skills_img} alt='Skills_img' />
            <p>{props.Name}</p>
        </div>

        <div className='type_div'>
            <p>{props.type}</p>
        </div>

        <div className='level_div'>
            <p>{props.level}</p>
        </div>

        <div className='type_div'>
            <p>{props.category}</p>
        </div>

        <div className='type_div'>
            <p>{props.Status}</p>
            <Toggle />
        </div>

        <div className='type_div'>
            <p>{props.dateUpdate}</p>
        </div>

        <div>
            <OptionsMenu />
        </div>

    </div>

    </>);
}
 
export default SkillsInput;