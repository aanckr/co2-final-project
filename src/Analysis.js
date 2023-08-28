import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import Header from "./Header";

function Analysis(){
    let { user_name } = useParams();
    const [mentalHealth, setMentalHealth] = React.useState([]);
    const [studyAndWorkload, setStudyAndWorkload] = React.useState([]);
    const [lifestyle, setLifestyle] = React.useState([]);

    useEffect(() => {
        const fetchMentalHealth = async () => {
            const response = await fetch(`http://localhost:3001/mentalHealth/${user_name}`);
            return response.json();
        };
    
        const fetchStudyAndWorkload = async () => {
            const response = await fetch(`http://localhost:3001/studyandworkload/${user_name}`);
            return response.json();
        };
    
        const fetchLifestyle = async () => {
            const response = await fetch(`http://localhost:3001/lifestyle/${user_name}`);
            return response.json();
        };
    
        const fetchData = async () => {
            const [mentalHealthData, studyAndWorkloadData, lifestyleData] = await Promise.all([
                fetchMentalHealth(),
                fetchStudyAndWorkload(),
                fetchLifestyle(),
            ]);
    
            setMentalHealth(mentalHealthData);
            setStudyAndWorkload(studyAndWorkloadData);
            setLifestyle(lifestyleData);
        };
    
        fetchData();
    }, [user_name]);
    
    console.log('metal:', mentalHealth);
    console.log('s&:', studyAndWorkload);
    console.log('lifestyle:', lifestyle);
    
      
      
    return (
        <div>
            <Header />
            <h3>General Feeling</h3>

            <hr/>

            <h3>Mental Helth Information</h3>
        
            <hr/>

            <h3>Study and Workload Information </h3>

            <hr/>

            <h3>Lifestyle Information</h3>

            <hr/>

            <h3>Intersting Blogs</h3>
        </div>
    )
};

export default Analysis;