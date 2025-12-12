import React from 'react';
import './Page_editor.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import DropDown_btn from '../Common/DropDown_btn';
import Title3 from '../Common/Title3';
import TextEditor from '../Common/TextEditor';
import ImageEditor from '../Common/ImageEditor';
import uploadHeroImage from '../Assets/hero_img_edit.svg'
import uploadHero2Image from '../Assets/uploadHero2Image.svg'

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

                <div className='edit_div1_d2'>
                    <ImageEditor 
                    imageUrl={uploadHeroImage}
                    title="Hero Image"
                    subtitle="Change hero banner"
                    onChange={(file) => 
                    {uploadHeroImage(file);}}
                     />
                    <p className='img_change_p'>A common hero image size is 1280 x 720 pixels with a 16:9 aspect ratio</p>
                </div>



                <Title3 title='Meta description' />

                <div className='edit_div1_d1'>
                    <TextEditor />
                </div>

                <div className='edit_div1_d1'>
                    <TextEditor />
                </div>

                <div className='edit_div1_d2'>
                    <ImageEditor 
                    imageUrl={uploadHero2Image}
                    title="About Image"
                    subtitle="Change About banner"
                    onChange={(file) => 
                    {uploadHeroImage(file);}}
                     />
                    <p className='img_change_p'>A common hero image size is 1280 x 720 pixels with a 16:9 aspect ratio</p>
                </div>

            </div>

        </div>




    </div>

    </>);
}
 
export default Page_editor;