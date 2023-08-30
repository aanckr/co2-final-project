import './LogIn.css'
import React, { useState, useEffect } from 'react';

function LogIn () {
    const [userName, setUserName] = React.useState ('');
    const [password, setPassword] = React.useState ('');
    const [logInEntries, setLogInEntries] = React.useState ([]);

    const handleSubmit = (event) => {
        event.preventDefault()

        var userExists = false;
        var passwordCorrect = false;
        for (let i = 0; i < logInEntries.length; i++) {
            if (userName === logInEntries[i].user_name){
                userExists = true;
                if (password === logInEntries[i].password){
                    passwordCorrect = true;
                }
            }
        }

        if (!userExists || !passwordCorrect) {
            alert('Incorrect user data.')
            return;
        } else {
            const token = `${userName}:${password}`;  
            localStorage.setItem("token", token);
            window.location.href = `http://localhost:3000/Overview/${userName}`;
        }

    };
    
    useEffect(() => {
        
        const dataFetch = async () => {
            const response = await fetch("http://localhost:3001/userLogIns")
            const data = await response.json();
            
            setLogInEntries(data);
        };
        dataFetch();
    }, []);

    return (
        <div className='color'>

            <h1 className='mh-title'>Mental Health Tracker</h1>

            <div id='log-in'>
                <form onSubmit={handleSubmit}>

                    <br /><br /><br /><br />
                    <label className="log-in-labeling">
                        User Name
                        <input className="log-in-field" type='text' name='userName' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    </label>

                    <label className="log-in-labeling">
                        Password
                        <input className="log-in-field" type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    <button className="save-button" id='log-btn' type='submit'>Log In</button>
                </form>
            </div>

            <p id='no-account'>No account yet?</p>
            <button className="save-button" id='sign-btn' onClick={() => window.location.href = 'http://localhost:3000/SignUp'}>Sign Up</button>
        </div>   
   );
}

export default LogIn;

