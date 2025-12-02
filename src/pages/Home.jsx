import React from 'react';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import './Home.css';
import Graph_insighs from '../Assets/insight1_graph.svg'

const Home = () => {
    return (<>

    <Nav />

    <div className='dashboard_home_all'>

        <Aside />

        <div className='content_home_all'>

            <div className='div1-home'>
                <div className='insights_div'>
                    <div className='insights_div'>
                    <p>Insight</p>
                    <button>Explore</button>
                    </div>

                    <img src={Graph_insighs} alt='Graph_insighs' />
                </div>
            </div>
    

        </div>
    </div>

    </>);
}

export default Home;