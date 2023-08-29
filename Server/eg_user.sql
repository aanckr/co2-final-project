-- Inserting a sample user
INSERT INTO user 
(user_name, password, name, e_mail, birthdate, height, weight, sex, semester, degree, course_of_study) 
VALUES 
('John', 'pass1234', 'John Doe', 'john.doe@email.com', '1995-02-15', 180, 75, 'Male', 5, 'Bachelor', 'Coding and Software Engineering');

-- Inserting 14 sample rows into mental_health table
INSERT INTO mental_health 
(user_name, date, general_mood, stress_level, sleep_quality, sleep_duration) 
VALUES 
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
('John', '2023-08-14', 3, 2, 4, 8.0);

-- Inserting 14 sample rows into study_and_worklaod table
INSERT INTO study_and_workload 
(user_name, date, study_time, learning_time, work_time) 
VALUES 
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
('John', '2023-08-14', 2.5, 1.0, 4.5);

-- Inserting 14 sample rows into lifestyle table
INSERT INTO lifestyle 
(user_name, date, dietary_habits, activity_time, tobacco_use, alcohol_consumption, drug_use) 
VALUES 
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
('John', '2023-08-14', 'Omnivorous', 1.5, 'Yes', 'Yes', 'Yes');