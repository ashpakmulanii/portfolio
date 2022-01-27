import React from 'react';
import "./Publications.css";

export const Publications = () => {
    return (
        <div className="publications">
            <div className="courses-container">
                <div className="common">

                    <p className="mainContent">Most Recent Publication Or Articless</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="course">
                    <img className="publications__img" src='https://github.com/ashpakmulani1101/portfolio/blob/main/public/images/1.JPG?raw=true'></img>

                    <div className="course-preview">
                        <h6>Course</h6>
                        <h2>JavaScript Fundamentals</h2>
                        <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div className="course-info">
                        <div className="progress-container">
                            <div className="progress"></div>
                            <span className="progress-text">
                                6/9 Challenges
                            </span>
                        </div>
                        <h6>Chapter 4</h6>
                        <h2>Callbacks & Closures</h2>
                        <button className="article__btn">Show Article</button>
                    </div>
                </div>
            </div>


        </div>
    );
};
