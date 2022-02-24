import React from 'react'
import { FaCode, FaReact } from "react-icons/fa";
import "./footer__style.css";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <ul className="footer__left">
                    <div className="navbar__title">
                        <FaCode className="Span" style={{ marginRight: "5px" }} />
                        <span className="Span">ashpakmulani</span>
                    </div>
                </ul>
                <ul className="footer__right">
                    <a>&copy;Copyright all rights reserved by ashpakmulani 2021-2025</a>
                </ul>
            </div>
        </footer >
    )
}
