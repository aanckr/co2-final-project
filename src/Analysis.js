import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import Header from "./Header";
import MentalHealthInformation from "./MentalHealthInformation";
import StudyAndWorkloadInformation from "./StudyAndWorkloadInformation";
import LifestyleInformation from "./LifestyleInformation";

function Analysis(){
    let { user_name } = useParams();
    const [mentalHealth, setMentalHealth] = React.useState([]);

    useEffect(() => {
        const dataFetch = async () => {
          const response = await fetch(`http://localhost:3001/mentalHealth/${user_name}`)
  
          const data = await response.json();
          setMentalHealth(data);
        };
          dataFetch();
    },[user_name]);
    
    function renderEmoji(){
        const emojisMood = [0x1F621, 0x1F613, 0x1F610, 0x1F603, 0x1F929];
        const emojisTrend = [0x2197, 0x2198]
        
        if (mentalHealth[0]){
            var output = String.fromCodePoint(emojisMood[mentalHealth[0].general_mood]);
            if (mentalHealth.length > 6){
                var generalMoodPast = 0;
                for (var i = 1; i < 6; i++){
                    generalMoodPast += mentalHealth[i].general_mood;
                };
                generalMoodPast = generalMoodPast/5;
                console.log(generalMoodPast);

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
        <div>
            <Header />
            <br/>
            <h3>General Feeling</h3>
            <span>{renderEmoji()}</span>
            <hr/>

            <h3>Mental Helth Information</h3>
            <MentalHealthInformation />
            <hr/>

            <h3>Study and Workload Information </h3>
            <StudyAndWorkloadInformation />
            <hr/>

            <h3>Lifestyle Information</h3>
            <LifestyleInformation />
            <hr/>

            <h3>Intersting Blogs</h3>
        </div>
    )
};

export default Analysis;