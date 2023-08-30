import "./HeaderStart.css";
import SignUp from './images/SignUp.png';
import LogIn from './images/LogIn.png';
import Pluto from './images/pluto.png';
const React = require('react');
const { Link } = require('react-router-dom');

function HeaderStart() {
  return (
    <div className="header_start">
      <nav className="navigation_start">
        <div><img className="logo" src={Pluto} alt="Pluto-Icon"/></div>
        <ul>
          <li><Link to="/LogIn"><img className="start-icon" src={LogIn} alt="LogIn-Icon" />LogIn</Link></li>
          <li><Link to="/SignUp"><img className="start-icon" src={SignUp} alt="SignUp-Icon" />SignUp</Link></li>
        </ul>
      </nav>
      <h3 className="app_name">Mental Health Tracker</h3>
    </div>
  );
}

export default HeaderStart;