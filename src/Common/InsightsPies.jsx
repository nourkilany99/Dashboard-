import React from 'react';
import './InsightsPies.css';
import ExploreBtn from './ExploreBtn';

const InsightsPies = (props) => {
    return (<>
    
    <div className='InsightsPies_card'>

        <div>
            <p>{props.Title}</p>
            <ExploreBtn width = "24px" />
        </div>

        <div>
            <img src={props.pieChart1} alt='PieChart1' />
        </div>

    </div>

    </>);
}
 
export default InsightsPies;