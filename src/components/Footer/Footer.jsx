import React from 'react';
import './Footer.css';
import Githhub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';


const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="container">
                <div className="social-links">
                    <img src={Githhub} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    );
}

export default Footer;
