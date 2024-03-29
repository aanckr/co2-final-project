import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MentalHealthInformation(props){
    let { user_name } = useParams();
    const [mentalHealth, setMentalHealth] = useState([]);
    const [showLines, setShowLines] = useState({
        general_mood: true,
        stress_level: true,
        sleep_quality: true,
        sleep_duration: true
    });

    useEffect(() => {
        const dataFetch = async () => {
          const response = await fetch(`http://localhost:3001/mentalHealth/${user_name}`)
          const data = await response.json();
          
          for (const row of data){
            if (row.date) {
                const formattedDate = row.date.split("T")[0];
                row.date = formattedDate;
            };
          };

          setMentalHealth(data.reverse());
        };
        dataFetch();
    },[user_name]);

    const toggleLine = (key) => {
        setShowLines(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <div id="mental-health-information">
            <h3 id="analysis-headline">Mental Helth Information</h3>
            
            <div className="check">
                <label>
                    <input type="checkbox" checked={showLines.general_mood} onChange={() => toggleLine('general_mood')} />
                    General Mood
                </label>
                <label>
                    <input type="checkbox" checked={showLines.stress_level} onChange={() => toggleLine('stress_level')} />
                    Stress Level
                </label>
                <label>
                    <input type="checkbox" checked={showLines.sleep_quality} onChange={() => toggleLine('sleep_quality')} />
                    Sleep Quality
                </label>
                <label>
                    <input type="checkbox" checked={showLines.sleep_duration} onChange={() => toggleLine('sleep_duration')} />
                    Sleep Duration
                </label>
            </div>

            <LineChart id="line-chart"
                width={props.width}
                height={props.height}
                data={mentalHealth}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {showLines.general_mood && <Line type="monotone" dataKey="general_mood" stroke="#8884d8" />}
                {showLines.stress_level && <Line type="monotone" dataKey="stress_level" stroke="#82ca9d" />}
                {showLines.sleep_quality && <Line type="monotone" dataKey="sleep_quality" stroke="#d884b0" />}
                {showLines.sleep_duration && <Line type="monotone" dataKey="sleep_duration" stroke="#84c0d8" />}
            </LineChart>
        </div>
    );
}

export default MentalHealthInformation;
