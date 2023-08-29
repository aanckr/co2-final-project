import React, { useState, useEffect } from 'react';

function SignUp(){
    const [name, setName]= React.useState('');
    const [email, setEmail]= React.useState('');
    const [birthdate, setBirthdate]= React.useState('');
    const [sex, setSex]=  React.useState('');
    const [userName, setUserName]= React.useState('');
    const [password, setPassword]= React.useState('');
    const [repeatPassword, setRepeatPassword]= React.useState('');

    const [user, setUser]= React.useState();

    useEffect(() => {
        
        const dataFetch = async () => {
            const response = await fetch(`http://localhost:3001/userName`)
            const data = await response.json();
            
            setUser(data);
        };
        dataFetch();
    }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const finalBirthdate = birthdate ? birthdate : null;
        const finalSex = sex ? sex : null;

        var userNameExists = false
        user.forEach(u => {
            if (userName === u.user_name){
                userNameExists = true;
            };
        });
        

        if (!name || !userName || !email || !password || !repeatPassword) {
            alert('Please fill out all required fields (*).');
            return;
        } else if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        } else if (userNameExists){   
            alert('User Name already exist.');
            return; 
        } else {
            window.location.href = 'http://localhost:3000/LogIn'
        }   

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userName: userName, password: password, name: name, email: email, birthdate: finalBirthdate, height: null, weight: null, sex: finalSex, semester: null, course: null})
        };
        
        const dataFetch = async () => {
            const response = await fetch("http://localhost:3001/user",requestOptions)
            const data = response.json();

        }
        dataFetch();
    };

    return (
        <div>
            <h1>Mental Health Tracker</h1>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='* Name' name='name' maxLength={20} value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
            <input type='email' placeholder='* Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
            <input type='date' placeholder='Birthdate' name='birthdate' value={birthdate} onChange={(e) => setBirthdate(e.target.value)}></input><br></br>
            <select name='sex' value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value='' disabled>Sex</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Diverse'>Diverse</option>
            </select><br></br>
            <br></br>
            <input type='text' placeholder='* User Name' name='userName' maxLength={10} value={userName} onChange={(e) => setUserName(e.target.value)}></input><br></br>
            <input type='password' placeholder='* Password' name='password' minLength={4} maxLength={20} value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
            <input type='password' placeholder='* Repeat Password' name='repeatPassword' minLength={4} value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></input><br></br>
            <br></br>
            <button type='submit'>Sign Up</button>
        </form>
        <hr/>
        <button onClick={() => window.location.href = 'http://localhost:3000/LogIn'}>Log In</button>
        </div>
    );
}

export default SignUp;
