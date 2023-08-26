import CurrentStatus from './CurrentStatus';
import Header from './Header';
import HealthData from './HealthData';
import PersonalMessage from './PersonalMessage';
import Footer from './Footer'
import "./Overview.css";

function Overview() {
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
