import React from 'react'
import { FaBootstrap, FaFish, FaGit, FaGithub, FaJsSquare, FaLinux, FaPhp, FaPython, FaReact, FaUikit, FaWindows } from 'react-icons/fa'

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

                    <div className="row bgMain">
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <div className="services__box-header">Languages</div>

                                <div className="service__box-content">
                                    <FaJsSquare className="commonIcons" />
                                    <div className="services__box-p"> JavaScript (ES-6)</div>
                                </div>
                                <div className="service__box-content">
                                    <FaPython className="commonIcons" />
                                    <div className="services__box-p"> Python</div>
                                </div>
                                <div className="service__box-content">
                                    <FaPhp className="commonIcons" />
                                    <div className="services__box-p"> PHP</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <div className="services__box-header">Technologies</div>

                                <div className="service__box-content">
                                    <FaReact className="commonIcons" />
                                    <div className="services__box-p"> React.js</div>
                                </div>
                                <div className="service__box-content">
                                    <FaPython className="commonIcons" />
                                    <div className="services__box-p"> Django</div>
                                </div>
                                <div className="service__box-content">
                                    <FaBootstrap className="commonIcons" />
                                    <div className="services__box-p"> Bootstrap</div>
                                </div>
                                <div className="service__box-content">
                                    <FaUikit className="commonIcons" />
                                    <div className="services__box-p"> Meterial UI</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <div className="services__box-header">Platforms</div>

                                <div className="service__box-content">
                                    <FaLinux className="commonIcons" />
                                    <div className="services__box-p"> Linux Mint, Ubuntu, Manjaro</div>
                                </div>
                                <div className="service__box-content">
                                    <FaWindows className="commonIcons" />
                                    <div className="services__box-p"> Windows </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <div className="services__box-header">Version Control</div>

                                <div className="service__box-content">
                                    <FaGit className="commonIcons" />
                                    <div className="services__box-p"> Git</div>
                                </div>
                                <div className="service__box-content">
                                    <FaGithub className="commonIcons" />
                                    <div className="services__box-p"> GitHub</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <div className="services__box-header">Platforms</div>

                                <div className="service__box-content">
                                    <FaLinux className="commonIcons" />
                                    <div className="services__box-p"> Linux Mint, Ubuntu, Manjaro</div>
                                </div>
                                <div className="service__box-content">
                                    <FaWindows className="commonIcons" />
                                    <div className="services__box-p"> Windows </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <div className="services__box-header">Database Management System</div>

                                <div className="service__box-content">
                                    <FaFish className="commonIcons" />
                                    <div className="services__box-p"> MySQL</div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
