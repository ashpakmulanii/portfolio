import React from 'react'
import { FaCode } from "react-icons/fa";
import "./footer__style.css";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <ul className="footer__left">
                    <div className="footer__title">
                        <span className="Span">Apk </span> <p className="sublogo">JSDev</p>
                    </div>
                </ul>
                <ul className="footer__right">
                    <a>&copy;Copyright 2021-2025</a>
                </ul>
            </div>
        </footer >
    )
}
