import CurrentStatus from './CurrentStatus';
import Header from './Header';
import BlogRecommendations from './BlogRecommendations';
import PersonalMessage from './PersonalMessage';
import Footer from './Footer'
import "./Overview.css";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Overview() {
  let { user_name } = useParams()

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      window.location.href = 'http://localhost:3000/LogIn';
    } else {
      const [tokenUserName] = token.split(':');
      
      if (tokenUserName !== user_name) {
        window.location.href = 'http://localhost:3000/LogIn';
      }
    }
  }, [token, user_name]);

  return (
  <div className='color'>
    <Header/>
    <h1>Your Profile Overview</h1>
    <CurrentStatus/>
    <PersonalMessage/>
    <BlogRecommendations/>
    <Footer/>
  </div>
  )
}

export default Overview;
