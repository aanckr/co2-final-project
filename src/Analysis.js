import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import "./Analysis.css"
import Header from "./Header";
import MentalHealthInformation from "./MentalHealthInformation";
import StudyAndWorkloadInformation from "./StudyAndWorkloadInformation";
import LifestyleInformation from "./LifestyleInformation";
import Footer from './Footer';

function Analysis(){
    let { user_name } = useParams();
    const [mentalHealth, setMentalHealth] = React.useState([]);

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

    useEffect(() => {
        const dataFetch = async () => {
          const response = await fetch(`http://localhost:3001/mentalHealth/${user_name}`)
  
          const data = await response.json();
          setMentalHealth(data);
        };
          dataFetch();
    },[user_name]);
    
    function renderEmoji(){
        const emojisMood = [0x1F613, 0x1F631, 0x1F610, 0x1F603, 0x1F929];
        const emojisTrend = [0x2197, 0x2198]
        
        if (mentalHealth[0]){
            var output = String.fromCodePoint(emojisMood[(mentalHealth[0].general_mood-1)]);
            if (mentalHealth.length > 6){
                var generalMoodPast = 0;
                for (var i = 1; i < 6; i++){
                    generalMoodPast += mentalHealth[i].general_mood;
                };
                generalMoodPast = generalMoodPast/5;

                if (mentalHealth[0].general_mood < generalMoodPast){
                    output += String.fromCharCode(emojisTrend[1])
                } else {
                    output += String.fromCharCode(emojisTrend[0])
                }
            };
            return output;
        };
        return 'No data.'
    };
      
    return (
        <div className="color">
            <Header />
            <h1>General Feeling</h1>
            <span id="analysis-emojis">{renderEmoji()}</span>
           
            <MentalHealthInformation width={1000} height={500}/>   

            <StudyAndWorkloadInformation width={1000} height={500}/>   

            <LifestyleInformation width={1000} height={500}/>

            <Footer />
        </div>
    )
};

export default Analysis;