import CurrentStatus from './CurrentStatus';
import Header from './Header';
import HealthData from './HealthData';
import PersonalMessage from './PersonalMessage';

function Overview() {
  return (
  <>
    <Header/>
    <h1>Your Profile Overview</h1>
    <CurrentStatus/>
    <PersonalMessage/>
    <HealthData/>
  </>
  )
}

export default Overview;
