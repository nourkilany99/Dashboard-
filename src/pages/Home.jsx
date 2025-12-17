import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import './Home.css';
import './mobile.css'
import Graph_insighs from '../Assets/insight1_graph.svg'
import Statecard from '../Common/State_card';
import Title from '../Common/Title';
import QuickActionBtn from '../Common/QuickAction_btn';
import add from '../Assets/add_icon.svg';
import blog from '../Assets/post_icon.svg';
import upload from '../Assets/upload_icon.svg';
import message from '../Assets/message_action_icon.svg'
import Dropdown from '../Common/DropDown_btn'
import ExploreBtn from '../Common/ExploreBtn';
import chart1 from '../Assets/chart1.svg';
import chart2 from '../Assets/chart2.svg';
import OptionsMenu from "../Common/OptionsMenu";
import ActivityCard from '../Common/ActivityCard';
import activeimg1 from '../Assets/activityImg1.svg';
import activeimg2 from '../Assets/activityImg2.svg';
import activeimg3 from '../Assets/activityImg3.svg';
import InsightsPies from '../Common/InsightsPies';
import pieChart from '../Assets/PieChart2.svg';
import Footer2 from '../components/Footer2';
import {supabase} from '../Supabase';


const Home = () => {
   

    const [loading, setLoading] = useState(true);
    const [Insights,setInsights] = useState("");
    const [QuickActions, setQuickActions] = useState([]);
    const [Activity, setActivity] = useState([]);
    const [DashHero,setDashHero] = useState("");
    
    
            
    useEffect(()=>{
                
        
    async function getPageData(){
        const res = await supabase.from("Insights").select("*");
        const quickActionsRes = await supabase.from("QuickActions").select("*");
        const ActivityRes = await supabase.from("Activity").select("*");
        const herores = await supabase.from("DashHero").select("*");

        setInsights(res.data);
        setDashHero(herores.data);
        setQuickActions(quickActionsRes.data);
        setActivity(ActivityRes.data);
        setLoading(false);
    }
        
    getPageData()
        
        
        
    },[])
    if (loading) return <p>Loading....</p>;






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


            {
            DashHero
            .filter(DashHero => DashHero.id === 7)
            .map((DashHero)=>{

            return  <>
            <Title title={DashHero.Title}  />
            </>

            })
            }

                <div className='Collection_state'>

                {
                Insights
                .filter(Insights => Insights.id === 1 || Insights.id === 2 ||  Insights.id === 3  )
                .map((Insights)=>{

                return  <>
                 <Statecard title={Insights.title} number={Insights.number} note={Insights.note} />
                </>

                })
                }
                </div>

            </section>

            <div className='quick_actions'>

            {
            DashHero
            .filter(DashHero => DashHero.id === 8)
            .map((DashHero)=>{

            return  <>
            <Title title={DashHero.Title}  />
            </>

            })
            }

            <div className='all_quick_btns'>

                 {
                QuickActions.map((QuickActions)=>{

                return  <>
                 <QuickActionBtn route={QuickActions.Links} icon={QuickActions.Icon} action={QuickActions.Buttons}  />
                </>

                })
                }


            </div>
            </div>

            <div className='Charts'>

                <div className='chart1'>
                    <div className='chart1_d1'>
                        <p>Performance chart</p>

                        <div className='chart1_d1_d'>
                        <Dropdown />
                        <ExploreBtn />
                        </div>
                    </div>
                    <div className='chart_img_d'>
                        <img src={chart1} alt='chart1' className='chart_img' />
                    </div>
                </div>


                <div className='chart2'>
                    <div className='chart2_d1'>
                        <p>Performance chart</p>

                        <div className='chart2_d1_d'>
                        <OptionsMenu options={[ { label: "Refresh", onClick: () => console.log("refresh clicked") },{ label: "Export Data", onClick: () => console.log("export clicked") },{ label: "View Details", onClick: () => console.log("view clicked") },]} />
                        </div>
                    </div>
                    <div className='chart_img_d'>
                        <img src={chart2} alt='chart2' className='chart2_img' />
                    </div>
                </div>


            </div>

            <div className='Activity'>

                <div className='activity_hero_d'>
                {
                DashHero
                .filter(DashHero => DashHero.id === 9)
                .map((DashHero)=>{

                return  <>
                <Title title={DashHero.Title}  />
                </>

                })
                }

                <div className='activity_d1_btns'>
                        <Dropdown label="Last 24 downloads" width="200px" />
                        <ExploreBtn width="42px" />
                </div>
                
                </div>

                <div className='activity_card_main_cntnt'>
                    {
                     Activity.map((Activity)=>{

                    return  <>
                    <ActivityCard activimg={Activity.Img} activ_name={Activity.Name} theActivity={Activity.Activity} activityDate={Activity.Date} />
                    </>

                    })
                    }

                </div>


            </div>

            <div className='PieChartAll'>
                <InsightsPies Title='Most Visited Page' pieChart={pieChart} />
                <InsightsPies Title='Average time per visit' pieChart={pieChart} />
                <InsightsPies Title='Bounce Rate' pieChart={pieChart} />
            </div>

            <Footer2 />

    

        </div>

    </div>

    </>);
}

export default Home;