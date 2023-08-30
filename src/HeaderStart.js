import "./HeaderStart.css";
const React = require('react');
const { Link } = require('react-router-dom');

function HeaderStart() {
  return (
    <div className="header_start">
      <nav className="navigation_start">
        <ul>
          <li><h3 className="logo">Mental Health Tracker</h3></li>
          <li><Link to="/LogIn">LogIn</Link></li>
          <li><Link to="/SignUp">SignUp</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderStart;