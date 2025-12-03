import React from 'react';
import './ExploreBtn.css'
import explore_arrow from '../Assets/explore_arrow.svg';


const ExploreBtn = ({ width = "24px" }) => {
    return (<>
    
     <img src={explore_arrow} alt='explore_arrow' className='explore_arrow_comp' style={{ width: width }} />

    </>);
}
 
export default ExploreBtn;