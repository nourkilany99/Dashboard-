import React from 'react';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import './Home.css';
import Graph_insighs from '../Assets/insight1_graph.svg'
import Statecard from '../Common/State_card';
import Title from '../Common/Title';
import QuickActionBtn from '../Common/QuickAction_btn';
import add from '../Assets/add_icon.svg';
import blog from '../Assets/post_icon.svg';
import upload from '../Assets/upload_icon.svg';
import message from '../Assets/message_action_icon.svg'

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

            <section className='state_cards'>

                <Title title="State_cards" />

                <div className='Collection_state'>
                    <Statecard title='Complete Projects' number="743,980 " note='30% increase over the past two months ' />
                    <Statecard title='Total Blog Posts' number="34 " note='5 added in the last 2 days ' />
                    <Statecard title='Site Visits (Last 7 Days)' number="5385 " note='10% increase over the last two weeks' />
                </div>

            </section>

            <div className='quick_actions'>
            <Title title='Quick Actions'/>
            <div className='all_quick_btns'>
                <QuickActionBtn icon={add} action='Add a new project' />
                <QuickActionBtn icon={blog} action='Write a post' />
                <QuickActionBtn icon={upload} action='Exhibition Item for Lifting' />
                <QuickActionBtn icon={message} action='View Messages' />
            </div>
            </div>

    

        </div>

    </div>

    </>);
}

export default Home;