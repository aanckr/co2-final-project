import "./Header.css";
import profilePicture from "./images/profile-pic.png";
import { link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <nav id="navigation">
        <ul>
          <li>
            <a href={"./Overview"}>Profile</a>
          </li>

          <li>
            <a href="#">Track</a>
          </li>
          <li>
            <a href={"./Analysis"}>Analysis</a>
          </li>
          <li>
            <a href={"./Blog"}>Blog</a>
          </li>
        </ul>
      </nav>

      <div id="profile-picture">
      <a href={"./Profile"}><img src={profilePicture}  alt="Profile Picture" /></a>
        
      </div>
    </div>
  );
}

export default Header;
