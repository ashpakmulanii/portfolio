import React from 'react'
import { FaBootstrap, FaCss3, FaDatabase, FaFish, FaGit, FaGithub, FaJs, FaJsSquare, FaLinux, FaPhp, FaPython, FaReact, FaUikit, FaWindows } from 'react-icons/fa'
import './skillset.css'
export const SkillSet = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
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
            </div>
        </div>
    )
}
