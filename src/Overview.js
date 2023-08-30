import CurrentStatus from './CurrentStatus';
import Header from './Header';
import HealthData from './HealthData';
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
    <HealthData/>
    <Footer/>
  </div>
  )
}

export default Overview;
