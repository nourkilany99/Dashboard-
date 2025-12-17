import React, { useEffect, useState } from 'react';
import './Category.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import search from '../Assets/search_icon.svg';
import AddBtn from '../Common/AddBtn';
import EditBtn from '../Common/EditBtn';
import manage from '../Assets/blog_icon.svg';
import CategoryCard from '../Common/CategoryCard';
import Footer from '../components/Footer';
import {supabase} from '../Supabase';


const Category = () => {
        const [loading, setLoading] = useState(true);
        const [Category,setCategory] = useState("");
        const [DashHero,setDashHero] = useState("");
        
        useEffect(()=>{
            
    
        async function getAllCategory_cardAPI(){
            const res = await supabase.from("Category").select("*");
            const DashHerores = await supabase.from("DashHero").select("*");
            setCategory(res.data);
            setDashHero(DashHerores.data)
            setLoading(false);
        }
    
        getAllCategory_cardAPI ()
    
    
    
        },[])
        if (loading) return <p>Loading....</p>;



    return (<> 

    <Nav />

    <div className='dashboard_category_all'>

        <Aside />

        <div className='content_category_all'>

            <div className='title_actions_cat'>

            {DashHero.filter(DashHero => DashHero.id === 6).map((DashHero)=>{
                return  <>
                <Title title={DashHero.Title} subtitle={DashHero.Subtitle} />
                </>
            })}


            <div className='action_categ'>

                <button className='action_categ_search'>
                    <img src={search} alt='search' />
                </button>

                <div className='action_categ_btns'>
                    <AddBtn width="80%" height="5.5vh" title="Add category" />
                    <EditBtn icony={manage} action='Manage Categories' />
                </div>

            </div>

    
            </div>





         <div className="categ_cards_container">
        {
        Category
        .filter(category => category.id === 1 || category.id === 2 ||  category.id === 3 || category.id === 4 || category.id === 5 )
        .map((Category)=>{

        return  <>

        <CategoryCard  key={Category.id} img={Category.Image} title={Category.name} date={Category.date} />
        
        </>

        })
        }
        </div>






            {/* <div className="categ_cards_container">
                <CategoryCard img={img1} title="UI/UX Designs" date="22/1/2024" />
                <CategoryCard img={img2} title="Graphic Designs" date="22/1/2024" />
                <CategoryCard img={img3} title="Motion Graphics" date="22/1/2024" />
                <CategoryCard img={img4} title="Photography" date="22/1/2024" />
                <CategoryCard img={img5} title="Videography" date="22/1/2024" />
            </div> */}



        </div>

    </div>

    <Footer />

    

    </>);
}
 
export default Category;