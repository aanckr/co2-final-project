const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser')
port = 3001;

app.use(cors());
app.use(express.json());


const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'web-admin',
    password: 'Potsdam!sGr8',
    database: 'pluto'
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});

app.post('/initialize', (req, res) => {
    
    con.query('CREATE SCHEMA IF NOT EXISTS pluto',
        function(err, result){
            if (err) throw err;
            console.log('Schema Created');
        });

    con.query('USE pluto',
        function(err, result){
            if (err) throw err;
            console.log('Schema Connected');
        });

    const user = `CREATE TABLE IF NOT EXISTS user (
        user_name VARCHAR(10) NOT NULL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        e_mail VARCHAR(25) NOT NULL,
        birthdate DATE,
        height INT,
        weight INT,
        sex ENUM('Male', 'Female', 'Diverse'),
        semester INT,
        course_of_study VARCHAR(40)  
    );`;    

    const log_in = `CREATE TABLE IF NOT EXISTS log_in (
        user_name VARCHAR(10) NOT NULL PRIMARY KEY,
        password VARCHAR(20) NOT NULL,
        FOREIGN KEY (user_name) REFERENCES user (user_name)
    );`;

    const mental_health = `CREATE TABLE IF NOT EXISTS mental_health (
        mental_health_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(10) NOT NULL,
        date datetime NOT NULL,
        general_mood INT,
        stress_level INT,
        sleep_quality INT,
        sleep_duration DECIMAL(4,2),
        FOREIGN KEY (user_name) REFERENCES user (user_name)
    );`;

    const study_and_workload = `CREATE TABLE IF NOT EXISTS study_and_worklaod (
        study_and_workload_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(10) NOT NULL,
        date DATETIME NOT NULL,
        study_time DECIMAL(4,2),
        learning_time DECIMAL(4,2),
        work_time DECIMAL(4,2),
        FOREIGN KEY (user_name) REFERENCES user (user_name)
    );`;

    const lifestyle = `CREATE TABLE IF NOT EXISTS lifestyle (
        lifestyle_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(10) NOT NULL,
        date DATETIME NOT NULL,
        dietary_habits ENUM('Vegetarian', 'Vegan', 'Omnivorous', 'Other'),
        activity_time DECIMAL(4,2),
        tobacco_use ENUM('Yes', 'No'),
        alcohol_consumption ENUM('Yes', 'No'),
        drug_use ENUM('Yes', 'No'), 
        FOREIGN KEY (user_name) REFERENCES user (user_name)
    );`;

    con.query(user, function (err, result) {
        if (err) throw err;
        console.log('user table created')
    });

    con.query(log_in, function (err, result) {
        if (err) throw err;
        console.log('log_in table created')
    });

    con.query(mental_health, function (err, result) {
        if (err) throw err;
        console.log('mental_health table created')
    });

    con.query(study_and_workload, function (err, result) {
        if (err) throw err;
        console.log('study_and_workload table created')
    });

    con.query(lifestyle, function(err, result) {
        if (err) throw err;
        console.log('lifestyle table created')
    }) 
});

app.get('/user/:user_name', function(req, res){
    con.query('SELECT * FROM user', function(err, rows){
        res.send(rows);
    });
});

app.post('/user', function(req, res){
    const {userName, name, email, birthdate, height, weight, sex, semester, course} = req.body
    
    if(userName == null || name == null || email == null) {
        res.json({error:'User Name, Name or E-Mail is missing.'});
        return;
    };
    
    const sql = 'INSERT INTO user (user_name, name, e_mail, birthdate, height, weight, sex, semester, course_of_study) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    con.query(sql, [userName, name, email, birthdate, height, weight, sex, semester, course], function(err, result){
        if(err) throw err;
        res.status(201).send('New user created');
    })
});

app.get('/log_in', function(req, res){
    con.query('SELECT * FROM log_in', function(err, rows){
        res.send(rows);
    });
});

app.post('/log_in', function(req, res){
    const {user_name, password} = req.body;
    const sql = 'INSERT INTO user (user_name, password) VALUES (?, ?)';
    con.query(sql, [user_name, password], function(err, result){
        if(err) throw err;
        res.status(201).send('LogIn data created')
    });
});

app.listen(port, () => {
    console.log(`Express-Server läuft auf Port ${port}`);
  });