import "./Footer.css"
const React = require('react');
const { Link } = require('react-router-dom');

function Footer_start() {
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
            </div>
            <div className="footer-col-1">
                <h3>JOIN US</h3>
                <Link to="/logIn">LogIn</Link>
                <Link to="/signUp">SignUp</Link>
            </div>
            <div className="footer-col-2">
                <h3>NEWSLETTER</h3>
                <form >
                    <input type="email" placeholder="Your Email Address" required></input>
                    <br />
                    <button className='button-news' type="submit">SUBSCRIBE NOW</button>
                </form>
            </div>
            <div className="footer-col-3">
                <h3>CONTACT</h3>
                <p>XU University Students</p>
                <p>August-Bebel-Str. 26-53</p>
                <p>14482 Potsdam</p>
            </div>
            <div className='footer-col-1'>
                <h3>LEGAL</h3>
                <Link to="/privacy">Privacy</Link>
            </div>
        </footer>
    );
}

export default Footer_start;

