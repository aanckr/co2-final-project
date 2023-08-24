import Header from './Header';
import CurrentStatus from './CurrentStatus';
import PersonalMessage from './PersonalMessage';
import HealthData from './HealthData';

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
