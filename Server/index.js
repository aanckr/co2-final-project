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
    password: 'Pluto',
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
        password VARCHAR(20) NOT NULL,
        name VARCHAR(20) NOT NULL,
        e_mail VARCHAR(25) NOT NULL,
        birthdate DATE,
        height INT,
        weight INT,
        sex ENUM('Male', 'Female', 'Diverse'),
        degree ENUM('Bachelor', 'Master'),
        semester INT,
        course_of_study VARCHAR(40)  
    );`;    

    const mental_health = `CREATE TABLE IF NOT EXISTS mental_health (
        mental_health_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(10) NOT NULL,
        date DATE NOT NULL,
        general_mood INT,
        stress_level INT,
        sleep_quality INT,
        sleep_duration DECIMAL(4,2),
        FOREIGN KEY (user_name) REFERENCES user (user_name)
    );`;

    const study_and_workload = `CREATE TABLE IF NOT EXISTS study_and_workload (
        study_and_workload_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(10) NOT NULL,
        date DATE NOT NULL,
        study_time DECIMAL(4,2),
        learning_time DECIMAL(4,2),
        work_time DECIMAL(4,2),
        FOREIGN KEY (user_name) REFERENCES user (user_name)
    );`;

    const lifestyle = `CREATE TABLE IF NOT EXISTS lifestyle (
        lifestyle_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(10) NOT NULL,
        date DATE NOT NULL,
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
    }); 
});

app.post('/addExampleData', (req, res) =>{

    const user = `INSERT INTO user (user_name, password, name, e_mail, birthdate, height, weight, sex, semester, degree, course_of_study) VALUES ('John', 'pass1234', 'John Doe', 'john.doe@email.com', '1995-02-15', 180, 75, 'Male', 5, 'Bachelor', 'Coding and Software Engineering');`;

    const mentalHealth = `INSERT INTO mental_health (user_name, date, general_mood, stress_level, sleep_quality, sleep_duration) VALUES 
        ('John', '2023-08-01', 3, 2, 4, 7.5),
        ('John', '2023-08-02', 4, 3, 5, 8.0),
        ('John', '2023-08-03', 2, 4, 3, 6.5),
        ('John', '2023-08-04', 5, 1, 2, 8.5),
        ('John', '2023-08-05', 4, 2, 1, 7.5),
        ('John', '2023-08-06', 3, 3, 4, 8.0),
        ('John', '2023-08-07', 2, 4, 5, 6.5),
        ('John', '2023-08-08', 5, 1, 3, 8.5),
        ('John', '2023-08-09', 4, 3, 2, 7.5),
        ('John', '2023-08-10', 3, 2, 1, 8.0),
        ('John', '2023-08-11', 2, 4, 5, 6.5),
        ('John', '2023-08-12', 5, 1, 2, 8.5),
        ('John', '2023-08-13', 4, 3, 3, 7.5),
        ('John', '2023-08-14', 3, 2, 4, 8.0);`;

    const studyAndWorkload = `INSERT INTO study_and_workload (user_name, date, study_time, learning_time, work_time) VALUES 
        ('John', '2023-08-01', 2.0, 1.5, 5.0),
        ('John', '2023-08-02', 2.5, 1.0, 4.5),
        ('John', '2023-08-03', 3.0, 1.5, 5.0),
        ('John', '2023-08-04', 2.0, 2.0, 4.0),
        ('John', '2023-08-05', 2.5, 1.5, 5.0),
        ('John', '2023-08-06', 3.0, 1.0, 4.5),
        ('John', '2023-08-07', 2.0, 1.5, 5.0),
        ('John', '2023-08-08', 2.5, 2.0, 4.0),
        ('John', '2023-08-09', 3.0, 1.5, 5.0),
        ('John', '2023-08-10', 2.0, 1.0, 4.5),
        ('John', '2023-08-11', 2.5, 1.5, 5.0),
        ('John', '2023-08-12', 3.0, 2.0, 4.0),
        ('John', '2023-08-13', 2.0, 1.5, 5.0),
        ('John', '2023-08-14', 2.5, 1.0, 4.5);`;

    const lifestyle = `INSERT INTO lifestyle (user_name, date, dietary_habits, activity_time, tobacco_use, alcohol_consumption, drug_use) VALUES 
        ('John', '2023-08-01', 'Vegetarian', 1.5, 'No', 'Yes', 'No'),
        ('John', '2023-08-02', 'Omnivorous', 2.0, 'Yes', 'No', 'Yes'),
        ('John', '2023-08-03', 'Vegan', 1.0, 'No', 'Yes', 'No'),
        ('John', '2023-08-04', 'Other', 2.5, 'Yes', 'Yes', 'Yes'),
        ('John', '2023-08-05', 'Vegetarian', 2.0, 'No', 'No', 'No'),
        ('John', '2023-08-06', 'Omnivorous', 1.5, 'Yes', 'Yes', 'Yes'),
        ('John', '2023-08-07', 'Vegan', 1.0, 'No', 'No', 'No'),
        ('John', '2023-08-08', 'Other', 2.5, 'Yes', 'No', 'Yes'),
        ('John', '2023-08-09', 'Vegetarian', 1.5, 'No', 'Yes', 'No'),
        ('John', '2023-08-10', 'Omnivorous', 2.0, 'Yes', 'No', 'Yes'),
        ('John', '2023-08-11', 'Vegan', 1.0, 'No', 'Yes', 'No'),
        ('John', '2023-08-12', 'Other', 2.5, 'Yes', 'Yes', 'Yes'),
        ('John', '2023-08-13', 'Vegetarian', 2.0, 'No', 'No', 'No'),
        ('John', '2023-08-14', 'Omnivorous', 1.5, 'Yes', 'Yes', 'Yes');`;

        con.query(user, function (err, result) {
            if (err) throw err;
            console.log('user table filled')
        });
    
        con.query(mentalHealth, function (err, result) {
            if (err) throw err;
            console.log('mental_health table filled')
        });
    
        con.query(studyAndWorkload, function (err, result) {
            if (err) throw err;
            console.log('study_and_workload table filled')
        });
    
        con.query(lifestyle, function(err, result) {
            if (err) throw err;
            console.log('lifestyle table filled')
        });
});

app.get('/user/:user_name', function(req, res){
    con.query('SELECT * FROM user WHERE user_name = ?', [req.params.user_name], function(err, row){
        res.send(row);
    });
});

app.post('/user', function(req, res){
    const {userName, password, name, email, birthdate, height, weight, sex, semester, degree, course} = req.body
    
    const sql = 'INSERT INTO user (user_name, password, name, e_mail, birthdate, height, weight, sex, semester, degree, course_of_study) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    con.query(sql, [userName, password, name, email, birthdate, height, weight, sex, semester, degree, course], function(err, result){
        if(err) throw err;
        res.json({status: 'New user created'});
    })
});

app.put('/user/:user_name', function(req, res){
    const {name, email, height, weight, sex, semester, degree, course} = req.body

    const sql = 'UPDATE user SET name = ?, e_mail = ?, height = ?, weight = ?, sex = ?, semester = ?, degree = ?, course_of_study = ? WHERE user_name = ?'
    con.query(sql, [name, email, height, weight, sex, semester, degree, course, req.params.user_name], function(err, result){
        if(err) throw err;
        res.json({status: 'Updated user data'});
    });
});

app.get('/userLogIns', function(req, res){
    con.query('SELECT user_name, password FROM user', function(err, rows){
        res.send(rows);
    });
});

app.get('/mentalHealth/:user_name', function(req, res){
    con.query('SELECT * FROM mental_health WHERE user_name =? ORDER BY date DESC', [req.params.user_name], function(err, row){
        res.send(row);
    });
});

app.get('/mentalHealth/:user_name/:date', function(req, res){
    con.query('SELECT * FROM mental_health WHERE (user_name = ? and date = ?)', [req.params.user_name, req.params.date], function(err, row){
        res.send(row)
    })
})

app.post('/mentalHealth', function(req, res){
    const {user_name, date, general_mood, stress_level, sleep_quality, sleep_duration} = req.body
    const sql = 'INSERT INTO mental_health (user_name, date, general_mood, stress_level, sleep_quality, sleep_duration) VALUES (?, ?, ?, ?, ?, ?)'
    con.query(sql, [user_name, date, general_mood, stress_level, sleep_quality, sleep_duration], function(err, result){
        if(err) throw err;
        res.json({status: 'New mental health entry'});
    });
});

app.get('/studyAndWorkload/:user_name', function(req, res){
    con.query('SELECT * FROM study_and_workload WHERE user_name =? ORDER BY date DESC', [req.params.user_name], function(err, row){
        res.send(row);
    });
});

app.post('/studyAndWorkload', function(req, res){
    const {user_name, date, study_time, learning_time, work_time} = req.body
    const sql = 'INSERT INTO study_and_workload (user_name, date, study_time, learning_time, work_time) VALUES (?, ?, ?, ?, ?)'
    con.query(sql, [user_name, date, study_time, learning_time, work_time], function(err, result){
        if(err) throw err;
        res.json({status: 'New mental health entry'});
    });
});

app.get('/lifestyle/:user_name', function(req, res){
    con.query('SELECT * FROM lifestyle WHERE user_name =? ORDER BY date DESC', [req.params.user_name], function(err, row){
        res.send(row);
    });
});

app.post('/lifestyle', function(req, res){
    const {user_name, date, dietary_habits, activity_time, tobacco_use, alcohol_consumption, drug_use} = req.body
    const sql = 'INSERT INTO lifestyle (user_name, date, dietary_habits, activity_time, tobacco_use, alcohol_consumption, drug_use) VALUES (?, ?, ?, ?, ?, ?, ?)'
    con.query(sql, [user_name, date, dietary_habits, activity_time, tobacco_use, alcohol_consumption, drug_use], function(err, result){
        if(err) throw err;
        res.json({status: 'New mental health entry'});
    });
});

app.listen(port, () => {
    console.log(`Express-Server läuft auf Port ${port}`);
  });