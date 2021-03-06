import React from 'react';
import "./Publications.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';

export const Publications = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const [state] = useState([
        {
            id: 1,
            title: "आय.सी.एम.एस. कॉलेजच्या अश्पाक मुलानीची आरसेन्स कंपनीत निवड",
            publisher: "तेज न्यूज सोलापूर / विशेष/ आय.सी.एम.एस. कॉलेज",
            desc: "RSense Technology Solutions PVT LTD. या राष्ट्रीय दर्जाच्या कंपनीच्या निवड समितीने ,पंढरपूर येथील आय. सी.एम.एस महाविद्यालयातील अश्पाक अहमद मुलाणी या विद्यार्थ्यांची निवड झाली असून...",
            imgSrc: "https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/src/images/15.JPG",
            when: "1 Januery 2022",
            isLink: true,
            linkUrl: "https://tejnews33.com/?p=3354"
        },
        {
            id: 2,
            title: "Qulifying Selection Process ",
            publisher: "RSense Technology Solutions PVT. LTD.",
            desc: "Honored By Founder Of RSense Technology Solutions Mr. Suraj Ronger for successfully clearing all selection rounds",
            imgSrc: "https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/src/images/13.JPG",
            when: "26 December 2022"
        },
        {
            id: 3,
            title: "Honered by Campus-Head",
            publisher: "ICMS Pandharpur",
            desc: "Honored By Principal Of Institude Of Computer Management And Studies College Miss. Jayashree Chawan on getting selected in on-campus recruiment drive",
            imgSrc: "https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/src/images/ranker.JPG",
        },
    ])
    return (
        <div className="publications">
            <div className="dummy__common">
                <h1 className="mainHeader">Honors & Awards </h1>
                <p className="mainContent">Most Recent Articles and Publications relates to me</p>
                <div className="commonBorder"></div>
            </div>
            <div className="course__container">
                {state.map((info) => (
                    <div key={info.id} data-aos="fade-up" className="course">
                        <img className="publications__img" src={info.imgSrc} alt=""></img>
                        <div className="course-info">
                            <div className="progress-container">
                            </div>
                            <h6>{info.publisher}</h6>
                            <h3>{info.title}</h3>
                            <p>{info.desc}</p>
                            <div className="ShowDetails__Btn">
                                {info.isLink ? <a className='open_link__btn' href={info.linkUrl}>Show Details</a> : ""}

                            </div>
                        </div>
                    </div>
                ))}
                <div data-aos="fade-up" className="nonimg__course">
                    <div className="course-info">
                        <div className="progress-container">
                        </div>
                        <h6>FabTech college of engineering and research</h6>
                        <h3>Technofab 2K20 Winner</h3>
                        <p>Wonned a state level technical RANCHO-MEET in Web Designing associated with computer science and engineering students . </p>
                        <div className="ShowDetails__Btn">
                            <a className='open_link__btn'>Show Credentials</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};