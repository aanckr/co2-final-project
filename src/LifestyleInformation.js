import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LifestyleInformation(props){
    let { user_name } = useParams();
    const [lifestyle, setLifestyle] = useState([]);
    const [showLines, setShowLines] = useState({
        dietary_habits: true,
        activity_time: true,
        tobacco_use: true,
        alcohol_consumption: true,
        drug_use: true

    });

    useEffect(() => {
        const dataFetch = async () => {
          const response = await fetch(`http://localhost:3001/lifestyle/${user_name}`)
          const data = await response.json();
          setLifestyle(data.reverse());
        };
        dataFetch();
    },[user_name]);

    const toggleLine = (key) => {
        setShowLines(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <div id="lifestyle-information">
            <h3 id="analysis-headline">Lifestyle Information</h3>

            <div className="check">
                <label>
                    <input type="checkbox" checked={showLines.dietary_habits} onChange={() => toggleLine('dietary_habits')}/>
                    Dietary Habits
                </label>
                <label>
                    <input type="checkbox" checked={showLines.activity_time} onChange={() => toggleLine('activity_time')} />
                    Activity Time
                </label>
                <label>
                    <input type="checkbox" checked={showLines.tobacco_use} onChange={() => toggleLine('tobacco_use')} />
                    Tobacco Use
                </label>
                <label>
                    <input type="checkbox" checked={showLines.alcohol_consumption} onChange={() => toggleLine('alcohol_consumption')} />
                    Alcohol Consumption
                </label>
                <label>
                    <input type="checkbox" checked={showLines.drug_use} onChange={() => toggleLine('drug_use')} />
                    Drug Use
                </label>
            </div>

            <LineChart id="line-chart"
                width={props.width}
                height={props.height}
                data={lifestyle}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" dataKey="activity_time"/>
                <YAxis yAxisId="right" orientation="right" type="category" dataKey="dietary_habits" />
                <YAxis yAxisId="right2" orientation="right" type="category" dataKey="tobacco_use" />
                <Tooltip />
                <Legend />
                {showLines.dietary_habits && <Line type="monotone" yAxisId="right" dataKey="dietary_habits" stroke="#8884d8" />}
                {showLines.activity_time && <Line type="monotone" yAxisId="left"  dataKey="activity_time" stroke="#82ca9d" />}
                {showLines.tobacco_use && <Line type="monotone" yAxisId="right2" dataKey="tobacco_use" stroke="#d884b0" />}
                {showLines.alcohol_consumption && <Line type="monotone" yAxisId="right2" dataKey="alcohol_consumption" stroke="#84c0d8" />}
                {showLines.drug_use && <Line type="monotone" yAxisId="right2" dataKey="drug_use" stroke="#d8a484" />}
            </LineChart>
        </div>
    );
}

export default LifestyleInformation;
