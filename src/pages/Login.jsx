import React from 'react';
import './Login.css';
import './mobile.css'; 
import logo_white from '../Assets/logo_white.svg';
import login_img from '../Assets/loginImg.svg';
import google from '../Assets/google_logo.svg';
import eye from '../Assets/eye_icon.svg';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';


const Login = () => {
    return (<>

    <section className='loginS'>

        <div className='loginD1'>

            <img src={login_img} alt='login_hero_img' className='loginImg' />

            <div className='cntnt-img-login'>
            <p className='img_h'>Team member?</p>
            <button className='img_btn'>Request dashboard access</button>
            </div>

        </div>

        <div className='loginD2'>
            <div className='s1_d2_cntnt'>
                <img src={logo_white} alt='logo_white' />
                <hr className='hr_logo'></hr>
                <h1>Login to your account</h1>
            </div>

            <button className='btn_google'>
                <img src={google} alt='google' className='google_icon' />
                <p>Login with Google</p>
            </button>

            <div className='div_or'>
                <hr className='line_or'></hr>
                <p className='or_p'>Or</p>
                <hr className='line_or'></hr>
            </div>

            <div className='email_input_div'>
                <p className='email_req'>Email address</p>
                <input type="email" placeholder="info@noureelkilany.com" className='input_email' />
            </div>

            <div className='pass_input_div'>
                <p className='email_req'>Password</p>

                <div className='input_email'>
                <input type="email" placeholder="*******" className='input_theemail' />
                <img src={eye} alt='eye' className='eye' />
                </div>
            </div>

            <div className='remember_div'>
                <div className='rembr'>
                    <input type='checkbox' className="custom-checkbox" />
                    <p>Remember me ?</p>
                </div>

                <p className='frgt_pass_p'>Forget password?</p>
               
            </div>

            <Link className='link-reset' to='/'><button className='login_btn'>Login</button></Link>

        </div> 
    </section>

    <Footer />

    </> );
}
 
export default Login;