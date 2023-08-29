import React, { useState, useEffect } from 'react';
import './SignUp.css';

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
            alert('Please fill out all required sign-up-fields (*).');
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
        <div className='color'>
            <header></header>
            <h1 id='mh-title'>Mental Health Tracker</h1>
            <div id='sign-up'>
                <form onSubmit={handleSubmit}>
                    <input className="sign-up-field" id='first-field' type='text' placeholder='* Name' name='name' maxLength={20} value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input className="sign-up-field" type='email' placeholder='* Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input className="sign-up-field" type='date' placeholder='Birthdate' name='birthdate' value={birthdate} onChange={(e) => setBirthdate(e.target.value)}></input>
                    <select className="sign-up-field" placeholder='Sex' name='sex' onChange={(e) => setSex(e.target.value)}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Diverse'>Diverse</option>
                    </select>

                    <input className="sign-up-field" type='text' placeholder='* User Name' name='userName' maxLength={10} value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    <input className="sign-up-field" type='password' placeholder='* Password' name='password' minLength={4} maxLength={20} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <input className="sign-up-field" type='password' placeholder='* Repeat Password' name='repeatPassword' minLength={4} value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></input>

                    <button className="save-button" id='sign-up-btn' type='submit'>Sign Up</button>
                </form>
            </div>
            <p id='no-account'>Already have an account?</p>
            <button className="save-button" id='log-in-btn' onClick={() => window.location.href = 'http://localhost:3000/LogIn'}>Log In</button>
        </div>
    );
}

export default SignUp;
