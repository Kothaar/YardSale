# README

Developed for Portland State University CS465 Winter 2021 by Kelly Burton and Walker Bear

## Contents
 * Setup
 * Usage
 * Troubleshooting

 ## Setup 
### Requirements 

npm install create-react-scripts: Used to run react on frontend

https://www.npmjs.com/package/react-scripts

npm install express: Used to set up a server on the backend to do api calls

https://expressjs.com/

npm install axios: Used in order to do frontend requests to the backend for api calls

https://www.npmjs.com/package/axios

Dotenv: Used to facilitate .env file to hold our api keys

https://www.npmjs.com/package/dotenv

npm install react-burger-menu: Used to create the settings menu

https://github.com/negomi/react-burger-menu

npm install analog-clock-react: Used to get the analog clock in the center of the screen

https://www.npmjs.com/package/analog-clock-react

npm install react-responsive-carousel: Used to create the carousel for the Spotify data

https://www.npmjs.com/package/react-responsive-carousel


### Configuration 

If running locally you will need to create a .env file in the backend folder containing keys for the various apis used by the program, the variables needed in the file are 
| Variable | Key|
|--- | --- |
|REACT_APP_NASA_KEY=| "Your API key here"|
|SPOTIFY_CLIENT_ID= |"Your API key here" |
|SPOTIFY_CLIENT_SECRET=| "Your API key here"|
|OPEN_WEATHER_API_KEY=| "Your API key here"|


## Usage

To run the program after setting up the .env file you would navigate to the backend folder and enter 
```
node app.js
```
To start the express server

After that you will navigate to the frontend folder and enter
```
npm start
```
to run the frontend script and get the site to start displaying.


## Troubleshooting

If you followed the usage instructions and the site is not being displayed on localhost:3000 it is more than likely because you dont have, or have not correctly set up the .env file mentioned above.
