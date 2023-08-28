import Header from './Header';
import MentalHealth from './MentalHealth';
import StudyAndWorkload from './StudyAndWorkload';
import Lifestyle from './Lifestyle';
import Footer from './Footer'
import "./Track.css";
import { useState } from 'react';


function Track(){
    const [generalMood, setGeneralMood] = useState();
    const [stressLevel, setStressLevel] = useState();
    const [sleepQuality, setSleepQualtiy] = useState();
    const [sleepDuration, setSleepDuration] = useState();

    const [studyTime, setStudyTime] = useState();
    const [learningTime, setLearningTime] = useState();
    const [workTime, setWorkTime] = useState();

    const [dietaryHabits, setDietaryHabits] = useState();
    const [activityTime, setActivityTime] = useState();
    const [tobaccoUse, setTobaccoUse] = useState();
    const [alcoholConsumption, setAlcoholConsumption] = useState();
    const [drugUse, setDrugUse] = useState();

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
            <StudyAndWorkload setStudyTime={setStudyTime} setLearningTime={setLearningTime} setWorkTime={setWorkTime} />
            <Lifestyle setDietaryHabits={setDietaryHabits} setActivityTime={setActivityTime} setTobaccoUse={setTobaccoUse} setAlcoholConsumption={setAlcoholConsumption} setDrugUse={setDrugUse} />
            <button className='save-button'>Save</button> 
            <Footer/>

        </div>
    )
}

export default Track;