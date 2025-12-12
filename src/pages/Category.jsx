import React from 'react';
import './Category.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import search from '../Assets/search_icon.svg';
import AddBtn from '../Common/AddBtn';
import EditBtn from '../Common/EditBtn';
import manage from '../Assets/blog_icon.svg';
import img1 from '../Assets/activityImg1.svg';
import img2 from '../Assets/project2.svg';
import img3 from '../Assets/project3.svg';
import img4 from '../Assets/project3.svg';
import img5 from '../Assets/activityImg2.svg';
import CategoryCard from '../Common/CategoryCard';
import Footer from '../components/Footer'


const Category = () => {
    return (<> 

    <Nav />

    <div className='dashboard_category_all'>

        <Aside />

        <div className='content_category_all'>

            <div className='title_actions_cat'>

            <Title title='Categories  , Tags , Pages management' subtitle='Organize your content by creating categories  ,tags, and custom pages' />

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
                <CategoryCard img={img1} title="UI/UX Designs" date="22/1/2024" />
                <CategoryCard img={img2} title="Graphic Designs" date="22/1/2024" />
                <CategoryCard img={img3} title="Motion Graphics" date="22/1/2024" />
                <CategoryCard img={img4} title="Photography" date="22/1/2024" />
                <CategoryCard img={img5} title="Videography" date="22/1/2024" />
            </div>



        </div>

    </div>

    <Footer />

    

    </>);
}
 
export default Category;