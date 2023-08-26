import Header from './Header';
import MentalHealth from './MentalHealth';
import StudyAndWorkload from './StudyAndWorkload';
import Lifestyle from './Lifestyle';
import Footer from './Footer'
import "./Track.css";

function Track(){

    var today = new Date();
 
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
    var now = today.toLocaleString('en-US', options);

    return(
        <div className='color'>
            <Header/>
            <span>
                <h3 id='date'>{now}</h3>
            </span>
            <MentalHealth/>
            <StudyAndWorkload/>
            <Lifestyle/>
            <Footer/>

        </div>
    )
}

export default Track;