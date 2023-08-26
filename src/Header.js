import "./Header.css";
import profilePicture from "./images/profile-pic.png";
import { link, useParams } from "react-router-dom";

function Header() {
  let { user_name } = useParams();
  
  return (
    <div id="header">
      <nav id="navigation">
        <ul>
          <li>
            <a onClick={() => window.location.href = `http://localhost:3000/Overview/${user_name}`}>Profile</a>
          </li>

          <li>
            <a href="#">Track</a>
          </li>
          <li>
            <a onClick={() => window.location.href = `http://localhost:3000/Analysis/${user_name}`}>Analysis</a>
          </li>
          <li>
            <a onClick={() => window.location.href = `http://localhost:3000/Blog/${user_name}`}>Blog</a>
          </li>
        </ul>
      </nav>

      <div id="profile-picture">
      <a onClick={() => window.location.href = `http://localhost:3000/Profile/${user_name}`}><img src={profilePicture}  alt="Profile Picture" /></a>
        
      </div>
    </div>
  );
}

export default Header;
