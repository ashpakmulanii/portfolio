import React, { useEffect } from 'react'
import { FaBootstrap, FaCss3, FaDatabase, FaJsSquare, FaPhp, FaPython, FaQuoteRight, FaReact } from 'react-icons/fa'
import './skillset.css';
import Aos from "aos";
import "aos/dist/aos.css";
export const SkillSet = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="services">
            <div className="container">
                <div data-aos="fade-up" className="services__header">
                    <div className="common">
                        <h1 className="mainHeader">Technical Skill Set</h1>
                        <p className="mainContent">Tools and technologies i've learned and worked with in entire cs journey.</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="skills">
                        <div className="flexbox">
                            <div className="services__box">
                                <div className="services__box-header">Front-End Development</div>
                                <div className="service__box-content">
                                    <FaJsSquare className="commonIcons" />
                                    <div className="services__box-p">JavaScript (ES-6)</div>
                                    <span className="bar"><span className="ninety"></span></span>
                                </div>
                                <div className="service__box-content">
                                    <FaReact className="commonIcons" />
                                    <div className="services__box-p"> React.js</div>
                                    <span className="bar"><span className="eighty"></span></span>
                                </div>
                                <div className="service__box-content">
                                    <FaCss3 className="commonIcons" />
                                    <div className="services__box-p"> HTML & CSS</div>
                                    <span className="bar"><span className="ninety"></span></span>
                                </div>
                                <div className="service__box-content">
                                    <FaBootstrap className="commonIcons" />
                                    <div className="services__box-p"> Bootstrap</div>
                                    <span className="bar"><span className="sixty"></span></span>
                                </div>
                            </div>
                            <div className="side__icon">
                                <FaJsSquare className='sidebar__icon' />
                            </div>
                        </div>

                        <div className="flexbox">
                            <div className="side__icon">
                                <FaPython className='sidebar__icon' />
                            </div>
                            <div className="services__box">
                                <div className="services__box-header">Back-End Development & DBMS</div>
                                <div className="service__box-content">
                                    <FaPython className="commonIcons" />
                                    <div className="services__box-p"> Django</div>
                                    <span className="bar"><span className="ninety"></span></span>
                                </div>
                                <div className="service__box-content">
                                    <FaPhp className="commonIcons" />
                                    <div className="services__box-p"> PHP</div>
                                    <span className="bar"><span className="seventy"></span></span>
                                </div>
                                <div className="service__box-content">
                                    <FaDatabase className="commonIcons" />
                                    <div className="services__box-p"> MySQL</div>
                                    <span className="bar"><span className="seventy"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="more__skills">
                    <FaQuoteRight style={{ opacity: "0.6" }} />
                    <p>Beyond this i also have knowledge of other tools
                        and technologies like version control (Git and GitHub),
                        languages like C,C++,C#, .Net and Java which is the fundamentals
                        of software engineering. Have Abilitie of problem solving and Data structures.
                    </p>
                    <div className="quoteWriter__name">
                        <div className="right__block">
                            <div className="admin">
                                <img className="admin__img" src={require("../images/admin.jpg")} alt="admin" />
                                <div className="admin__info">
                                    <p style={{ fontSize: "16px", opacity: "0.7", color: "black" }}>Ashpak Ahmad Mulani</p>
                                    <p id="admin__role">- Full Stack Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
