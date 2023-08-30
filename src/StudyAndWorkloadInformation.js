import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function StudyAndWorkloadInformation(props){
    let { user_name } = useParams();
    const [studyAndWorkload, setStudyAndWorkload] = useState([]);
    const [showLines, setShowLines] = useState({
        study_time: true,
        learning_time: true,
        work_time: true
    });

    useEffect(() => {
        const dataFetch = async () => {
          const response = await fetch(`http://localhost:3001/studyandworkload/${user_name}`)
          const data = await response.json();

          for (const row of data){
            if (row.date) {
                const formattedDate = row.date.split("T")[0];
                row.date = formattedDate;
            };
          };
          
          setStudyAndWorkload(data.reverse());
        };
        dataFetch();
    },[user_name]);

    const toggleLine = (key) => {
        setShowLines(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <div id="study-and-workload-information">
            <h3 id="analysis-headline">Study and Workload Information </h3>

            <div className="check">
                <label>
                    <input type="checkbox" checked={showLines.study_time} onChange={() => toggleLine('study_time')}/>
                    Study Time on Campus
                </label>
                <label>
                    <input type="checkbox" checked={showLines.learning_time} onChange={() => toggleLine('learning_time')} />
                    Study Time at Home
                </label>
                <label>
                    <input type="checkbox" checked={showLines.work_time} onChange={() => toggleLine('work_time')} />
                    Work Time
                </label>
            </div>

            <LineChart id="line-chart"
                width={props.width}
                height={props.height}
                data={studyAndWorkload}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {showLines.study_time && <Line type="monotone" dataKey="study_time" stroke="#8884d8" />}
                {showLines.learning_time && <Line type="monotone" dataKey="learning_time" stroke="#82ca9d" />}
                {showLines.work_time && <Line type="monotone" dataKey="work_time" stroke="#d884b0" />}
            </LineChart>
        </div>
    );
}

export default StudyAndWorkloadInformation;
