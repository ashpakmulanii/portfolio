import React from 'react'
import "./fitness__style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from 'react';

export const Fitness = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const [cards] = useState([
        {
            title: "Genetics",
            imgSrc: "https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/src/images/fitness/2.jpg",
            desc: "Wether it is physique or web designing is love forever.",
            hashtags: ["#Shredded", "#Natural"],
        },
        {
            title: "Shredded",
            imgSrc: "https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/src/images/fitness/1.jpg",
            desc: "Man, is an indivisible entity an integrated unit of mind and body.",
            hashtags: ["#HomeGains", "Calisthenian"]
        },
        {
            title: "Bulk",
            imgSrc: "https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/src/images/fitness/3.jpg",
            desc: "Living in the world where bulk is equated with quality",
            hashtags: ["HIIITraining", "Splits"]
        },
        {
            title: "Balance",
            imgSrc: "https://raw.githubusercontent.com/ashpakmulanii/portfolio/main/src/images/fitness/4.jpg",
            desc: "Balance is a feeling derived from being whole and complete; it's a sense of harmony.",
            hashtags: ["Handstand", "Calisthenics"]
        }
    ])
    return (

        <div id="f__container">
            <div className="dummy__common">
                <h1 className="mainHeader">Fitness and Lifestyle </h1>
                <p className="mainContent">There are some clicks of of calisthenics fitness journey.
                </p>
                <div className="commonBorder"></div>
            </div>
            <div class="carousel owl-carousel">

                {cards.map((content) => (
                    <div data-aos="fade-up" className="f__card">
                        <img src={content.imgSrc} alt="Genetics" />
                        <div className="card__details">
                            {content.hashtags.map((hashtag) => (
                                <span className="tag">{hashtag}</span>
                            ))}
                            <div className="name">{content.title}</div>
                            <p>{content.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}