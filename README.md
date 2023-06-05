# Delivero project setup

This is an project is protected as private repository.

## frontEnd setup
clone the repository and run these commands
sh
npm i


#### FE configuraition 
find env file and update the file with google API client id 
sh
npm start


#### start project
FE will start on localhost port 3000


## BackEnd setup
clone the repository and run these command
sh
npm i 

### Database
You need to manually create database call 'delivero'.

#### Configuration
Go to the .env file and update it.

#### Migrate Database and Seed Fake Data
sh
npm run migrate
npm run seed 


#### start project
sh
npm start 


BE will start on localhost port 8080