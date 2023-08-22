import React, { useState } from 'react';

function LogIn () {
    const [userName, setUserName] = React.useState ([]);
    const [password, setPassword] = React.useState ([]);

    const handleSubmit = (event) => (
        event.preventDefault()
    );

    return (
     <div>
        <h1>Mental Health Tracker</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='User Name' name='userName' value={userName} onChange={(e) => setUserName(e.target.value)}></input><br></br>
            <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
            <button type='submit'>Log In</button>
        </form>
     </div>   
   );
}

export default LogIn;

