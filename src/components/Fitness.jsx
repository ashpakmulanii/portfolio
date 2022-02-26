import React from 'react'
import "./fitness__style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export const Fitness = () => {
    useEffect(() => {
        Aos.init({ juration: 2000 });
    }, [])
    return (

        <div id="f__container">
            <div data-aos="fade-up" className="dummy__common">
                <h1 className="mainHeader">Fitness and Lifestyle </h1>
                <p className="mainContent">There are some clicks of of calisthenics fitness journey.
                </p>
                <div className="commonBorder"></div>
            </div>
            <div data-aos="slide-up" className="f__card">
                <img src={require(
                    "../images/fitness/2.jpg"
                )} alt="Genetics" />

                <div className="card__details">
                    <span className="tag">#Shredded</span>
                    <span className="tag">#Natural</span>
                    <div className="name">Genetics</div>
                    <p>Wether it is physique or web designing is love forever.</p>
                </div>

            </div>

            <div data-aos="slide-left" className="f__card">
                <img src={require("../images/fitness/3.jpg")} alt="Lago di Braies" />

                <div className="card__details">
                    <span className="tag">#HomeWorkout</span>
                    <span className="tag">#Calisthenics</span>
                    <div className="name">Bulking</div>
                    <p>Living in the world where bulk is equated with quality</p>
                </div>

            </div>

            <div data-aos="fade-left" className="f__card">
                <img src={require("../images/fitness/1.jpg")} alt="Lago di Braies" />

                <div className="card__details">
                    <span className="tag">#FatLoss</span>
                    <span className="tag">#Calisthenian</span>
                    <div className="name">Shredded</div>
                    <p>Man, is an indivisible entity an integrated unit of mind and body.</p>
                </div>

            </div>


            <div data-aos="fade-down" className="f__card">
                <img src={require("../images/fitness/4.jpg")} alt="Lago di Braies" />

                <div className="card__details">
                    <span className="tag">#Handstand</span>
                    <span className="tag">#Calisthenics</span>
                    <div className="name">Balance</div>
                    <p>Balance is a feeling derived from being whole and complete; it's a sense of harmony.</p>
                </div>

            </div>


        </div>
    );
}
