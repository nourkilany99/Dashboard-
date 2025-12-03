import React from 'react';
import './InsightsPies.css';
import ExploreBtn from './ExploreBtn';

const InsightsPies = (props) => {
    return (<>
    
    <div className='InsightsPies_card'>

        <div className='InsightsPies_d1'>
            <p>{props.Title}</p>
            <ExploreBtn width = "46px" />
        </div>

        <div className='piechrts_img_div'>
            <img src={props.pieChart} alt='PieChart1' className='PieChart_img' />
        </div>

    </div>

    </>);
}
 
export default InsightsPies;