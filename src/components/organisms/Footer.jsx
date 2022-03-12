import React from 'react';
import LogoImg from '../atoms/LogoImg';
import './Footer.css'

const Footer = (props) => {
    return (
        <footer id="footer" className='col-xs-12'>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-xs-6 footer-catalogs">
                            <LogoImg/>
                            <ul className='col-xs-7'>
                                <li><a href={props.cursesHref}></a>{props.cursesText}</li><br/>
                                <li><a href={props.aboutProjectHref}></a>{props.aboutProjectText}</li><br/>
                                <li><a href={props.newsHref}></a>{props.newsText}</li>
                            </ul>
                        </div>
                        <div className="col-xs-6">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="footer-2">
                <div className="container">
                    <p className="col-xs-10 footer-2-text">© 2022 Все права защищены. INOSTUDIO</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;