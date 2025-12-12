import React from 'react';
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
import Footer from '../components/Footer'

const Blog = () => {
    return (<> 
    <Nav />

    <div className='dashboard_blog_all'>

        <Aside />

        <div className='content_blog_all'>
            <Title title='Blog page' subtitle='Manage all blog posts, drafts, categories, and comments in one place.' />

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

                <Title title="Blog Insights" />

                <div className='Collection_state'>
                    <Statecard title='Total Posts' number="120 " note='15 new this month ' />
                    <Statecard title='Drafts' number="7" note='unpublished  ' />
                    <Statecard title='Pending Comments' number="23 " note='awaiting approval ' />
                </div>

            </section>

            <Title3 title="Latest blog published " />

            <div className='card_blog'>
                <BlogCard
                image={blogThumb}
                title="UI/UX Problems"
                category="UI/UX"
                date="20 Dec 2025"
                views="2,345"
                published={true}
                onTogglePublish={() => {}}
                onEdit={() => {}}
                onView={() => {}}
                onCopy={() => {}}
                onDelete={() => {}}
                />
            </div>

            <Title3 title="All blogs " />

            <div className='rest_blog'>
                <BlogCard
                image={blogThumb}
                title="UI/UX Problems"
                category="UI/UX"
                date="20 Dec 2025"
                views="2,345"
                published={true}
                onTogglePublish={() => {}}
                onEdit={() => {}}
                onView={() => {}}
                onCopy={() => {}}
                onDelete={() => {}}
                />

                <BlogCard
                image={blogThumb}
                title="UI/UX Problems"
                category="UI/UX"
                date="20 Dec 2025"
                views="2,345"
                published={true}
                onTogglePublish={() => {}}
                onEdit={() => {}}
                onView={() => {}}
                onCopy={() => {}}
                onDelete={() => {}}
                />

                <BlogCard
                image={blogThumb}
                title="UI/UX Problems"
                category="UI/UX"
                date="20 Dec 2025"
                views="2,345"
                published={true}
                onTogglePublish={() => {}}
                onEdit={() => {}}
                onView={() => {}}
                onCopy={() => {}}
                onDelete={() => {}}
                />
            </div>



        </div>

        

    </div>
    <Footer />


    </>);
}
 
export default Blog;