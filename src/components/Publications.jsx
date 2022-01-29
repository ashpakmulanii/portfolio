import React from 'react';
import "./Publications.css";

export const Publications = () => {
    return (
        <div>
            <div className="courses-container">
                <div className="common">
                    <h1 className="mainHeader">Honors & Awards </h1>
                    <p className="mainContent">Most Recent Articles and Publications relates to me</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="course__container">
                    <div className="course">

                        <img className="publications__img" src={require('../images/publication.JPG')}></img>
                        <div className="course-info">
                            <div className="progress-container">

                                <span className="progress-text">
                                    तेज न्यूज
                                </span>
                            </div>
                            <h6>पंढरपूर प्रतिनिधी</h6>
                            <h3>आय.सी.एम.एस. कॉलेजच्या अश्पाक मुलानीची आरसेन्स कंपनीत निवड</h3>
                            <h5>आरसेन्स या राष्ट्रीय दर्जाच्या कंपनीच्या निवड समितीने कासेगाव,पंढरपूर येथील आय. सी.एम.एस महाविद्यालयातील विद्यार्थ्यांची मुलाखत घेतली व त्या निवड प्रक्रियेतून बीसीए मधील अंतिम वर्षातील अश्पाक अहमद मुलाणी या विद्यार्थ्यांची निवड झाली असून त्याला वार्षिक २.१६ लाख इतके पॅकेज मिळाले आहे.</h5>
                            <button className="article__btn" onClick={() => window.open("https://tejnews33.com/?p=3354")}>Show Publication</button>
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
                            <h3>1st Ranker</h3>
                            <h5>
                                Honored By Principal Of Institude Of Computer Management And Studies College Miss. Jayashree Chawan for archiving 1st Rank in fourth semister of bachelor of computer application.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
