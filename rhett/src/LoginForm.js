import React from 'react';
import profile from './imgjs/profile.jpg';
import email from './imgjs/email.webp';
import pass from './imgjs/passwordicon.png';

function LoginForm() {
        return (
<div className='main'>
        <div className='sub-main'>
            <div>
                <div className='imgs'>
                <div className='container-image'>
                    <img src={profile} alt="profile" className="profile"/>
                </div>
                </div>
            <div>
                <h1>Login</h1>
                <div>
                    <img src={email} alt="email" className="email"/>
                    <input type="text" placeholder="Email" className="name"/>
                </div>
                <div className='second-input'>
                    <img src={pass} alt="pass" className="email"/>
                    <input type="password" placeholder="Password" className="name"/>
                </div>
                <div className='button'>
                    <button>Login</button>
                </div>
                <p className="link">
                    <a href="#">Forgot password ?</a> or <a href="#">Sign up</a>
                </p>
            </div>
        </div>
    </div>
</div>
        );
    }
    
    export default LoginForm;