import React from 'react';
import './Page_editor.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import DropDown_btn from '../Common/DropDown_btn';
import Title3 from '../Common/Title3';
import TextEditor from '../Common/TextEditor';

const Page_editor = () => {
    return (<> 

    <Nav />

    <div className='dashboard_edit_project'>

        <Aside />

        <div className='content_edit_project'>

            <div className='edit_page_title_div'>
            <Title title='Page editor' subtitle='Organize your content by creating categories  ,tags, and custom pages' />
            <DropDown_btn label='Landing page' width='20%' />
            </div>

            <hr className='hr_page_edit'></hr>

            <div className='edit_div1'>
                <Title3 title='Meta description' />

                <div className='edit_div1_d1'>
                    <TextEditor />
                </div>
            </div>

        </div>




    </div>

    </>);
}
 
export default Page_editor;