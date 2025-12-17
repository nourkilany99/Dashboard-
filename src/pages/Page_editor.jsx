import React, { useEffect, useState } from 'react';
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
import Footer from '../components/Footer';
import {supabase} from '../Supabase';

const Page_editor = () => {
    const [loading, setLoading] = useState(true);
    const [DashHero,setDashHero] = useState("");
    const [EditPage,setEditPage] = useState("");
    




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


    useEffect(()=>{

        async function getPageData(){
        const res = await supabase.from("DashHero").select("*");
        const EditPageres = await supabase.from("EditPage").select("*");


        setDashHero(res.data);
        setEditPage(EditPageres.data)


        setLoading(false);
        }
        
        getPageData()
        
        
        
        },[])
      if (loading) return <p>Loading....</p>;




    return (<> 

    <Nav />

    <div className='dashboard_edit_project'>

        <Aside />

        <div className='content_edit_project'>

            <div className='edit_page_title_div'>

            {
            DashHero
            .filter(DashHero => DashHero.id === 2)
            .map((DashHero)=>{

            return  <>
            <Title title={DashHero.Title} subtitle={DashHero.Subtitle} />
            </>

            })
            }


            <DropDown_btn label='Landing page' width='20%' />
            </div>

            <hr className='hr_page_edit'></hr>

            <div className='edit_div1'>

            {
            DashHero
            .filter(DashHero => DashHero.id === 10)
            .map((DashHero)=>{

            return  <>
            <Title3 title={DashHero.Title}  />
            </>

            })
            }
    

                <div className='edit_div1_d1'>
                    <TextEditor />
                </div>

                <div className='edit_div1_d2'>

                    {
                    EditPage
                    .filter(EditPage => EditPage.id === 1 || EditPage.id === 2)
                    .map((EditPage)=>{

                    return  <>
                    <ImageEditor 
                    imageUrl={EditPage.Image}
                    title={EditPage.Title}
                    subtitle={EditPage.ActionName}
                    onChange={(file) => 
                    {uploadHeroImage(file);}}
                     />
                    </>

                    })
                    }


                    <p className='img_change_p'>A common hero image size is 1280 x 720 pixels with a 16:9 aspect ratio</p>
                </div>


                {
                DashHero
                .filter(DashHero => DashHero.id === 11)
                .map((DashHero)=>{

                return  <>
                <Title3 title={DashHero.Title}  />
                </>

                })
                }
               

                <div className='edit_div1_d1'>
                    <TextEditor />
                </div>

                <div className='edit_div1_d1'>
                    <TextEditor />
                </div>

                <div className='edit_div1_d2'>

                     {
                    EditPage
                    .filter(EditPage => EditPage.id === 3)
                    .map((EditPage)=>{

                    return  <>
                    <ImageEditor 
                    imageUrl={EditPage.Image}
                    title={EditPage.Title}
                    subtitle={EditPage.ActionName}
                    onChange={(file) => 
                    {uploadHeroImage(file);}}
                     />
                    </>

                    })
                    }

                    <ImageEditor 
                    imageUrl={uploadHero2Image}
                    title="About Image"
                    subtitle="Change About banner"
                    onChange={(file) => 
                    {uploadHeroImage(file);}}
                     />
                    <p className='img_change_p'>A common hero image size is 1280 x 720 pixels with a 16:9 aspect ratio</p>
                </div>


                {
                DashHero
                .filter(DashHero => DashHero.id === 12)
                .map((DashHero)=>{

                return  <>
                <Title3 title={DashHero.Title}  />
                </>

                })
                }

                <div className='edit_div1_d2'>
                    <TripleImageEditor
                    images={mockups}
                    onChangeImage={handleMockupChange}
                    subtitle="Change ongoing"
                />
                </div>

                {
                DashHero
                .filter(DashHero => DashHero.id === 13)
                .map((DashHero)=>{

                return  <>
                <Title3 title={DashHero.Title}  />
                </>

                })
                }


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