import CurrentStatus from './CurrentStatus';
import Header from './Header';
import HealthData from './HealthData';
import PersonalMessage from './PersonalMessage';

function Overview() {
  return (
  <>
    <Header/>
    <CurrentStatus/>
    <PersonalMessage/>
    <HealthData/>
  </>
  )
}

export default Overview;
