import "./Footer.css"
const React = require('react');
const { Link } = require('react-router-dom');

function Footer() {
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
            </div>
            <div className="footer-col-4">
                <h3>LEGAL</h3>
                <Link to="/privacy">Privacy</Link>
            </div>
            <div className="footer-col-5">
                <span>mentalhealthtracker@pluto</span>
            </div>
            <div className="footer-col-3">
                <h3>CONTACT</h3>
                <p>XU University Students</p>
                <p>August-Bebel-Str. 26-53</p>
                <p>14482 Potsdam</p>
            </div>
        </footer>
    );
}

export default Footer;