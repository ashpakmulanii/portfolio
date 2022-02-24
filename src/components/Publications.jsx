import React from 'react';
import "./Publications.css";

export const Publications = () => {
    return (
        <div className="publications">
            <div className="dummy__common">
                <h1 className="mainHeader">Honors & Awards </h1>
                <p className="mainContent">Most Recent Articles and Publications relates to me</p>
                <div className="commonBorder"></div>
            </div>
            <div className="course__container">

                <div className="course">
                    <img className="publications__img" src={require('../images/15.JPG')}></img>
                    <div className="course-info">
                        <div className="progress-container">
                            <span className="progress-text">
                                तेज न्यूज
                            </span>
                        </div>
                        <h6>पंढरपूर प्रतिनिधी</h6>
                        <h3>आय.सी.एम.एस. कॉलेजच्या अश्पाक मुलानीची आरसेन्स कंपनीत निवड</h3>
                        <h5>RSense Technology Solutions PVT LTD. या राष्ट्रीय दर्जाच्या कंपनीच्या निवड समितीने ,पंढरपूर येथील आय. सी.एम.एस महाविद्यालयातील अश्पाक अहमद मुलाणी या विद्यार्थ्यांची निवड झाली असून...                            <a className="open_link__btn" onClick={() => window.open("https://tejnews33.com/?p=3354")}>Open Link (Visit Tejnews)</a>
                        </h5>

                    </div>

                </div>
            </div>
            <div className="course__container">

                <div className="course">
                    <img className="publications__img" src={require('../images/13.JPG')}></img>

                    <div className="course-info">
                        <div className="progress-container">
                            <span className="progress-text">
                                4 Januery 2022
                            </span>
                        </div>
                        <h6>RSense Technology Solutions PVT. LTD.</h6>
                        <h3>Qulifying Selection Process</h3>
                        <h5>
                            Honored By Founder Of RSense Technology Solutions Mr. Suraj Ronger for successfully clearing all selection rounds.</h5>
                    </div>
                </div>

                <div className="course">
                    <img className="publications__img" src={require('../images/ranker.JPG')}></img>

                    <div className="course-info">
                        <div className="progress-container">
                            <span className="progress-text">
                                1 January 2022
                            </span>
                        </div>
                        <h6>ICMS Pandharpur</h6>
                        <h3>Honered by Campus-Head</h3>
                        <h5>
                            Honored By Principal Of Institude Of Computer Management And Studies College Miss. Jayashree Chawan for cracking on-campus recruiment drive.</h5>
                    </div>
                </div>
                <div className="nonimg__course">

                    <div className="course-info">
                        <div className="progress-container">
                            <span className="progress-text">
                                6 March 2020
                            </span>
                        </div>
                        <h6>FabTech College of Engineering & Research</h6>
                        <h3>TECHNOFAB 2K20</h3>
                        <h5>Wonned a state level technical RANCHO-MEET in Web Designing associated with computer science and engineering students.</h5>
                    </div>
                </div>
            </div>

        </div>

    );
};
