import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import Tilt from 'react-vanilla-tilt'

export default function () {
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">SERVICES</h3>
                        <p className="mainContent">Scroll down or nevigate to contact section and Reach me for enrollment of any kind of Website Development.
                        </p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">

                        <div className="col-4 bgMain">
                            <Tilt style={{}} className="services__box">
                                <div className="services__box-header">Single Page Application (SPA)</div>
                                <div className="services__box-p">Single Page Applications are a great tool for making incredibly engaging and unique experiences for your users. Some Single Page Application examples are like Gmail, Google Maps, AirBNB, Netflix, Pinterest, Paypal, and many more are using SPAs to build a fluid, scalable experience.
                                </div>
                            </Tilt>
                        </div>

                    </div>

                    <div className="row bgMain">

                        <div className="col-4 bgMain">
                            <Tilt style={{}} className="services__box">
                                <div className="services__box-header">Complete Website stack</div>
                                <div className="services__box-p">
                                    "Django is arguably the most complete web development framework available. It's highly secure, fast, and scalable. So far i have mentioned to have React for front-end which is the best combination for full stack.
                                </div>
                            </Tilt>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
