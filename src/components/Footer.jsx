import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./footer__style.css";
export const Footer = () => {
    return (
        <footer>
            <div className="content">

                <div className="left box">
                    <div className="upper">
                        <div className="topic">About Me</div>
                        <p>I'm a final year student of BCA ( Bachelor Of Computer Science ). Currently working with RSense Technology Solutions PVT. LTD as a Trainee Software Engineer and also a part-time freelancer</p></div>
                    <div className="lower">
                        <div className="topic">Contact Me</div>
                        <div className="phone">
                            <a href="#"><i className="fas fa-phone-volume"></i>+91 7875735385</a>
                        </div>
                        <div className="email">
                            <a href="#"><i className="fas fa-envelope"></i>ashpakmulani1101@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="middle box">
                    <div className="topic">My Services</div>
                    <div><a href="#">Web Design, Development</a></div>
                    <div><a href="#">Web UX Design, Reasearch</a></div>
                    <div><a href="#">Web User Interface Design</a></div>
                    <div><a href="#">Theme Development, Design</a></div>
                    <div><a href="#">Back End Development</a></div>
                    <div><a href="#">Diet plans and Calisthenics guidence</a></div>
                </div>
                <div className="right box">
                    <div className="topic">Subscribe us</div>
                    <input type="text" placeholder="Enter email address" />
                    <input type="submit" name="" value="Send" />
                    <div className="media-icons">
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebook /></a>
                    </div>
                </div>
            </div>
            {/* <div className="bottom">
                <p>Copyright ©2021 <a href="#">ApkWebX</a></p>
            </div> */}
        </footer>)

};
