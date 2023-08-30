import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cookie.css';
import cookieImage from './images/cookie.png';

function Cookie() {

    useEffect(() => {
        const executeCodes = () => {
            if (document.cookie.includes("codinglab")) return;
            cookieBox.classList.add("show");

            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    cookieBox.classList.remove("show");

                    if (button.id === "acceptBtn") {
                        document.cookie = "cookieBy=codinglab; max-age=" + 60 * 60 * 24 * 30;
                    }
                });
            });
        };

        const cookieBox = document.querySelector(".cookie-box");
        const buttons = document.querySelectorAll(".cookie-btn");

        window.addEventListener("load", executeCodes);

        return () => {
            window.removeEventListener("load", executeCodes);
            buttons.forEach(button => {
                button.removeEventListener("click", () => {});
            });
        };
    }, []);

    return (
            <div className='cookie-box'>
            <header>
                <img src={cookieImage} alt="Cookie" />
                <h3>Cookies Consent</h3>
            </header>
            <div className='cookie-txt'>
                <p>In order to optimize and personalize our websites for you, we would like to use cookies.
                    Cookies are also used to provide social media platform functionality, analyze traffic to
                    our websites, and share information about the use of our websites with our social media,
                    advertising, and analytics partners. Do you revocably agree to the use of cookies on our
                    websites?<Link to="/Privacy">read more!</Link></p>
            </div>
            <div className='cookie-buttons'>
                <button className='cookie-btn' id='acceptBtn'>Accept</button>
                <button className='cookie-btn' id='declineBtn'>Decline</button>
            </div>
        </div>
    );
}

export default Cookie;
