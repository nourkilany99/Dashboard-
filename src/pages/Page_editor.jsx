import React, { useState } from 'react';
import './Page_editor.css';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import DropDown_btn from '../Common/DropDown_btn';
import Title3 from '../Common/Title3';
import TextEditor from '../Common/TextEditor';
import ImageEditor from '../Common/ImageEditor';
import uploadHeroImage from '../Assets/hero_img_edit.svg';
import uploadHero2Image from '../Assets/uploadHero2Image.svg';
import TripleImageEditor from '../Common/TripleImageEditor';
import mock1Image from '../Assets/mock1_edit.svg';
import mock2Image from '../Assets/mock2_edit.svg';
import mock3Image from '../Assets/mock3_edit.svg';
import Footer from '../components/Footer'

const Page_editor = () => {
    const [mockups, setMockups] = useState([
    mock1Image,
    mock2Image,
    mock3Image,
    ]);

    const handleMockupChange = (index, file) => {
    const updated = [...mockups];
    updated[index] = URL.createObjectURL(file);
    setMockups(updated);

    // // Upload to backend or Supabase
    // uploadMockupToServer(index, file);
  };




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



                <Title3 title='Home section 2' />

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

                <Title3 title='Home section 3' />

                <div className='edit_div1_d2'>
                    <TripleImageEditor
                    images={mockups}
                    onChangeImage={handleMockupChange}
                    subtitle="Change ongoing"
                />
                </div>

                <Title3 title='Home section 4' />

                <div className='edit_div1_d1'>
                    <TextEditor />
                </div>


            </div>

            


        </div>
        




    </div>

    <Footer />

    </>);
}
 
export default Page_editor;