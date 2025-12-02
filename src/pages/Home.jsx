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
                    <div className='insights_div1'>
                    <p className='insight_p'>Insights</p>
                    <button className='explore_btn'>Explore</button>
                    </div>

                    <img src={Graph_insighs} alt='Graph_insighs' className='graph1_insight' />
                </div>

                <div className='calender_div'>
                    <div className='calender_div1'>
                    <p className='calender_p'>Calender</p>
                    <p className='date_p'>20 September 2025</p>
                    </div>

                    <div className='calender_all'>
                        <div className='calender_date1'>
                        <p>18</p>
                        </div>

                        <div className='calender_date2'>
                        <p>19</p>
                        </div>

                        <div className='calender_date_highlight'>
                        <p>20</p>
                        </div>

                        <div className='calender_date3'>
                        <p>21</p>
                        </div>

                        <div className='calender_date4'>
                        <p>22</p>
                        </div>

                    </div>

                </div>

            </div>

            {/* <div className='div2-home'>

            </div> */}
    

        </div>
    </div>

    </>);
}

export default Home;