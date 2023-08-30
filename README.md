# Run JetPackers

## Requirements

Docker
Visual Studio Code

## First start

### Create MYSQL_DATABASE

console:
    docker run --name pluto -e MYSQL_ROOT_PASSWORD=Potsdam\!sGr8 -e MYSQL_USER=web-admin -e MYSQL_PASSWORD=Potsdam\!sGr8 -e MYSQL_DATABASE=pluto -p 3306:3306 -d mysql:latest

### Run Database
Option1: Start Database in Docker
Option2: console:
            docker start pluto

### Start API
open console of co2-web-dev-final-project-pluto/Server :
    node index.js

### Create Schema and Tables
Terminal:
    curl -X POST http://localhost:3001/initialize


### Start dynamic web application/ frontend
open console of console of co2-web-dev-final-project-pluto :
    install react-scripts:
        npm install react-scripts --save

    start Website:
        npm start


## Second Start

### Run Database
Option1: Start Database in Docker
Option2: console:
            docker start pluto

### Start API
open console of co2-web-dev-final-project-pluto/Server :
    node index.js

### Start dynamic web application/ frontend
open console of console of co2-web-dev-final-project-pluto :
    npm start



### If you want to have example data:
Terminal:
    curl -X POST http://localhost:3001/addExampleData

Login data:
    User Name: John
    Password: pass1234