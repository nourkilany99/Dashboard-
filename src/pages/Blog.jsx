import React, { useEffect, useState } from 'react';
import './Blog.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import search from '../Assets/search_icon.svg';
import AddBtn from '../Common/AddBtn';
import EditBtn from '../Common/EditBtn';
import manage from '../Assets/post_icon.svg';
import Statecard from '../Common/State_card';
import Title3 from '../Common/Title3';
import BlogCard from '../Common/Blogcard';
import blogThumb from '../Assets/blog1thumb.svg';
import Footer from '../components/Footer';
import {supabase} from '../Supabase';

const Blog = () => {
    const [loading, setLoading] = useState(true);
    const [Insights, setInsights] = useState([]);
    const [DashHero, setDashHero] = useState([]);
    const [Cards, setBlogCard] = useState([]);


    useEffect(()=>{
                    
            
        async function getPageData(){
            const res = await supabase.from("Insights").select("*");
            const DashHerores = await supabase.from("DashHero").select("*");
            const BlogCardres = await supabase.from("Cards").select("*");


            setDashHero(DashHerores.data);
            setInsights(res.data);
            setBlogCard(BlogCardres.data);
        
            setLoading(false);
        }
            
        getPageData()
            
            
            
        },[])

        async function deleteBlog(id) {
  console.log("DELETE CLICKED, ID =", id);

  const { error } = await supabase
    .from("Cards")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("SUPABASE DELETE ERROR:", error);
    return;
  }

  setBlogCard(prev => prev.filter(card => card.id !== id));
}


        if (loading) return <p>Loading....</p>;



    return (<> 
    <Nav />

    <div className='dashboard_blog_all'>

        <Aside />

        <div className='content_blog_all'>

            {
            DashHero
            .filter(DashHero => DashHero.id === 4)
            .map((DashHero)=>{

            return  <>
            <Title title={DashHero.Title} subtitle={DashHero.Subtitle} />
            </>

            })
            }


            <div className='action_blog'>
                <button className='action_blog_search'>
                    <img src={search} alt='search' />
                </button>

                <div className='action_blog_btns'>
                    <AddBtn width="80%" height="5.5vh" title="Add new blog" />
                    <EditBtn icony={manage} action='Manage Categories' />
                </div>


            </div>

            <section className='state_cards'>

                {
                DashHero
                .filter(DashHero => DashHero.id === 14)
                .map((DashHero)=>{

                return  <>
                <Title title={DashHero.Title}  />
                </>

                })
                }


                <div className='Collection_state'>

                {
                Insights
                .filter(Insights => Insights.id === 4 || Insights.id === 5 ||  Insights.id === 6  )
                .map((Insights)=>{

                return  <>
                 <Statecard title={Insights.title} number={Insights.number} note={Insights.note} />
                </>

                })
                }

                </div>

            </section>


            {
            DashHero
            .filter(DashHero => DashHero.id === 15)
            .map((DashHero)=>{

            return  <>
            <Title3 title={DashHero.Title}  />
            </>

            })
            }


        <div className="card_blog">
        {Cards
        .filter(card => card.id === 1)
        .map(card => (
        <BlogCard
        key={card.id}
        image={card.Image}
        title={card.BlogName}
        category="UI/UX"
        date={card.Date}
        views={card.Views}
        published={card.Publish}
        onTogglePublish={() => {}}
        onEdit={() => {}}
        onView={() => {}}
        onCopy={() => {}}
        onDelete={() => deleteBlog(Cards.id)}   
        />
        ))
        }
        </div>


            {
            DashHero
            .filter(DashHero => DashHero.id === 16)
            .map((DashHero)=>{

            return  <>
            <Title3 title={DashHero.Title}  />
            </>

            })
            }


            <div className="rest_blog">
  {Cards
    .filter(card => card.id === 2 || card.id === 3 || card.id === 4)
    .map(card => (
      <BlogCard
        key={card.id}
        image={card.Image}
        title={card.BlogName}
        category="UI/UX"
        date={card.Date}
        views={card.Views}
        published={card.Publish}
        onTogglePublish={() => {}}
        onEdit={() => {}}
        onView={() => {}}
        onCopy={() => {}}
        onDelete={() => deleteBlog(Cards.id)}   // ✅
      />
    ))
  }
</div>




        </div>

        

    </div>
    <Footer />


    </>);
}
 
export default Blog;