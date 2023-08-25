import "./Header.css";
import profilePicture from './images/profile-pic.png';

function Header() {
    return (
      <div id="header">
        <nav id="navigation">
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Track</a>
            </li>
            <li>
              <a href="#">Analysis</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
  
        <div id="profile-picture">
          <img src={profilePicture} alt="Profile Picture" />
        </div>
      </div>
    );
  }
  
  export default Header;
  