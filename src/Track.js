import Header from './Header';
import MentalHealth from './MentalHealth';
import StudyAndWorkload from './StudyAndWorkload';
import Lifestyle from './Lifestyle';
import Footer from './Footer';
import "./Track.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Track(){
    let { user_name } = useParams();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [generalMood, setGeneralMood] = useState(5);
    const [stressLevel, setStressLevel] = useState(5);
    const [sleepQuality, setSleepQualtiy] = useState(5);
    const [sleepDuration, setSleepDuration] = useState();

    const [studyTime, setStudyTime] = useState();
    const [learningTime, setLearningTime] = useState();
    const [workTime, setWorkTime] = useState();

    const [dietaryHabits, setDietaryHabits] = useState();
    const [activityTime, setActivityTime] = useState();
    const [tobaccoUse, setTobaccoUse] = useState();
    const [alcoholConsumption, setAlcoholConsumption] = useState();
    const [drugUse, setDrugUse] = useState();

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

    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var now = today.toLocaleString('en-US', options);
    var date = today.toISOString().slice(0, 10);
    
    useEffect(() => {
        
        const dataFetch = async () => {
            const response = await fetch(`http://localhost:3001/mentalHealth/${user_name}/${date}`)
            const data = await response.json();

            if (data[0]){
                setFormSubmitted(true);
            };
            
        };
        dataFetch();
    }, [user_name, date]);

    const handleSubmit = (event) => {

        const finalGeneralMood = generalMood ? generalMood : null;
        const finalStressLevel = stressLevel ? stressLevel : null;
        const finalSleepQuality = sleepQuality ? sleepQuality : null;
        const finalSleepDuration = sleepDuration ? sleepDuration : null;

        const finalStudyTime = studyTime ? studyTime : null;
        const finalLearningTime = learningTime ? learningTime : null;
        const finalWorkTime = workTime ? workTime : null;

        const finalDietaryHabits = dietaryHabits ? dietaryHabits : null;
        const finalActivityTime = activityTime ? activityTime : null;
        const finalTobaccoUse = tobaccoUse ? tobaccoUse : null;
        const finalAlcoholConsumption = alcoholConsumption ? alcoholConsumption : null;
        const finalDrugUse = drugUse ? drugUse : null;
        
        const mentalHealthOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_name: user_name, date: date, general_mood: finalGeneralMood, stress_level: finalStressLevel, sleep_quality: finalSleepQuality, sleep_duration: finalSleepDuration})
        };

        const studyAndWorkloadOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_name: user_name, date: date, study_time: finalStudyTime, learning_time: finalLearningTime, work_time: finalWorkTime})
        };

        const lifestyleOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_name: user_name, date: date, dietary_habits: finalDietaryHabits, activity_time: finalActivityTime, tobacco_use: finalTobaccoUse, alcohol_consumption: finalAlcoholConsumption, drug_use: finalDrugUse})
        };
        
        const dataFetch = async () => {
            const responses = await Promise.all([
                fetch("http://localhost:3001/mentalHealth", mentalHealthOptions),
                fetch("http://localhost:3001/studyAndWorkload", studyAndWorkloadOptions),
                fetch("http://localhost:3001/lifestyle", lifestyleOptions)
            ]);
        }
        dataFetch();
        window.location.href = `http://localhost:3000/Track/${user_name}`;
    };

    return(
        <div className='color'>
            
            <Header/>
            
            {!formSubmitted ? (
                <div>
                    <h1>Track Your Daily Mood</h1>
                    <span>
                        <h3 id='date'>{now}</h3>
                    </span>
                    <MentalHealth setGeneralMood={setGeneralMood} setStressLevel={setStressLevel} setSleepQualtiy={setSleepQualtiy} setSleepDuration={setSleepDuration} />
                    <StudyAndWorkload setStudyTime={setStudyTime} setLearningTime={setLearningTime} setWorkTime={setWorkTime} />
                    <Lifestyle setDietaryHabits={setDietaryHabits} setActivityTime={setActivityTime} setTobaccoUse={setTobaccoUse} setAlcoholConsumption={setAlcoholConsumption} setDrugUse={setDrugUse} />
                    <button onClick={handleSubmit} type='submit' className='save-button'>Save</button>
                </div> 
            ) : (
                <div>
                    <span>
                        <h3 id='date'>{now}</h3>
                    </span>
                    <h1>Daily Form Done!</h1>
                </div>
            )}
            <Footer/>   
        </div>
    )
}

export default Track;