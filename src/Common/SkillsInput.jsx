import React from 'react';
import './SkillsInput.css';
import OptionsMenu from './OptionsMenu';
import Toggle from './Toggle';

const SkillsInput = (props) => {
    return (
        <div className='skills_row'>

            {/* Skills name + icon */}
            <div className='col skill_name_col'>
                <img src={props.Skills_img} alt="skill_icon" />
                <p>{props.Name}</p>
            </div>

            {/* Type */}
            <div className='col type_col'>
                <p>{props.type}</p>
            </div>

            {/* Level */}
            <div className='col level_col'>
                <p>{props.level}</p>
            </div>

            {/* Category */}
            <div className='col category_col'>
                <p>{props.category}</p>
            </div>

            {/* Status + toggle */}
            <div className='col status_col'>
                <p className='status_text'>{props.Status}</p>
                <Toggle />
            </div>

            {/* Last update */}
            <div className='col update_col'>
                <p>{props.dateUpdate}</p>
            </div>

            {/* Actions (3 dots menu) */}
            <div className='col action_col'>
                <OptionsMenu />
            </div>

        </div>
    );
}
 
export default SkillsInput;
