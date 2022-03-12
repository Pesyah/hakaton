import React from 'react';
import LogoImg from '../atoms/LogoImg';
import FeedBackForm from '../molecules/FeedbackForm';
import FooterLinks from '../molecules/FooterLinks';
import './Footer.css'

const Footer = (props) => {
    return (
        <footer id="footer" className='col-xs-12'>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-xs-5 footer-catalogs">
                            <div className="footer-catalogs-top">
                                <LogoImg/>
                                <br/><ul className='col-xs-7'>
                                    <li><a href={props.cursesHref}></a>{props.cursesText}</li><br/>
                                    <li><a href={props.aboutProjectHref}></a>{props.aboutProjectText}</li><br/>
                                    <li><a href={props.newsHref}></a>{props.newsText}</li>
                                </ul>
                            </div>
                            <FooterLinks/>
                        </div>
                        <div className="col-xs-7 footer-form-bl">
                            <h2 className="footer-form-h2">Свяжитесь с нами</h2>
                            <FeedBackForm/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <div className="container">
                    <p className="col-xs-10 footer-2-text">© 2022 Разработано командой SquareTeam. Все права защищены. INOSTUDIO</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;