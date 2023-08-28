import Header from './Header';
import MentalHealth from './MentalHealth';
import StudyAndWorkload from './StudyAndWorkload';
import Lifestyle from './Lifestyle';
import Footer from './Footer'
import "./Track.css";

function Track(){
    const [generalMood, setGeneralMood] = useState(1);
    const [stressLevel, setStressLevel] = useState(1);
    const [sleepQuality, setSleepQualtiy] = useState(1);
    const [sleepDuration, setSleepDuration] = useState(0);

    var today = new Date();
 
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
    var now = today.toLocaleString('en-US', options);

    return(
        <div className='color'>
            <Header/>
            <span>
                <h3 id='date'>{now}</h3>
            </span>
            <MentalHealth setGeneralMood={setGeneralMood} setStressLevel={setStressLevel} setSleepQualtiy={setSleepQualtiy} setSleepDuration={setSleepDuration} />
            <StudyAndWorkload/>
            <Lifestyle/>
            <button className='save-button'>Save</button> 
            <Footer/>

        </div>
    )
}

export default Track;