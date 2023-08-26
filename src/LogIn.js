import React, { useState, useEffect } from 'react';

function LogIn () {
    const [userName, setUserName] = React.useState ('');
    const [password, setPassword] = React.useState ('');
    const [logInEntries, setLogInEntries] = React.useState ([]);

    const handleSubmit = (event) => {
        event.preventDefault()

        var userExists = false;
        var passwordCorrect = false;
        var user;
        for (let i = 0; i < logInEntries.length; i++) {
            if (userName == logInEntries[i].user_name){
                userExists = true;
                user = userName;
                if (password == logInEntries[i].password){
                    passwordCorrect = true;
                }
            }
        }

        if (userExists == false || passwordCorrect == false) {
            alert('Incorrect user data.')
            return;
        } else {
            window.location.href = `http://localhost:3000/Overwiev/${userName}`;
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
     <div>
        <h1>Mental Health Tracker</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='User Name' name='userName' value={userName} onChange={(e) => setUserName(e.target.value)}></input><br></br>
            <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
            <button type='submit'>Log In</button>
        </form>
        <hr/>
        <button onClick={() => window.location.href = 'http://localhost:3000/SignUp'}>Sign Up</button>
     </div>   
   );
}

export default LogIn;

