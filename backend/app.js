const express = require("express");
const axios = require('axios');
const request = require('request')
const dotenv = require("dotenv");
const querystring = require('querystring')

dotenv.config()

const app = express();
const port = 5000;
const API = 'https://api.nasa.gov/planetary/apod?api_key=';
const KEY = process.env.REACT_APP_NASA_KEY;
const url = API+KEY

app.use(function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	    res.header("Access-Control-Allow-Credentials", "true");
	    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
	    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	    next();
});

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/backend", (req, res) =>{
	    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	    res.header("Access-Control-Allow-Credentials", "true");
	    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
	    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    console.log("/backend call")
    request (
        url,
        function(error,response,data){
            if(!error){
                var json = JSON.parse(data);
                var title = json['title']
                console.log('Check This', title)
                res.send(json);
            }
        }
    )
});
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
app.get("/authorize", (req,res) => {
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            client_id: process.env.SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirect_uri: 'http://localhost:5000/callback',
            //state: 'xyz',
            scope: 
                'user-read-private user-top-read user-modify-playback-state user-read-currently-playing user-read-playback-state'
        })
    )
});

app.get("/getforecast/:lat/:long", (req,res) => {
    console.log("lat"+req.params.lat)
    console.log("long"+req.params.long)
    console.log('https://api.openweathermap.org/data/2.5/onecall?lat='+req.params.lat+'&lon='+req.params.long+'&units=imperial&appid=' + process.env.OPEN_WEATHER_API_KEY)
    request('https://api.openweathermap.org/data/2.5/onecall?lat='+req.params.lat+'&lon='+req.params.long+'&units=imperial&appid=' + process.env.OPEN_WEATHER_API_KEY,
    function(error,response,data){
        if(!error){
            console.log(data);
            var json = JSON.parse(data);
            res.send(json);
        }
    }
    )
});

// Callback is where the clients secret gets sent in along with other requests to finish authorization
app.get("/callback", (req,res) => {
    //header Authorization: Basic *<base64 encoded client_id:client_secret>*
    //const authKey = `Basic ${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    //const buff = Buffer.from(authKey, 'utf-8');
    //const auth64enc = buff.toString('base64');
    const body = {
        uri: 'https://accounts.spotify.com/api/token',
        form:{
            grant_type: 'authorization_code',
            code: req.query.code,
            redirect_uri: 'http://localhost:5000/callback',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            client_secret: process.env.SPOTIFY_CLIENT_SECRET,
        },
        json: true
    }
    request.post(body, (error, response, body) => {
        var access_token = body.access_token;
        var uri = 'http://localhost:3000';
        res.redirect(uri + '?access_token=' + access_token)
        console.log(error)
    })

});

app.listen(port, () => console.log(` test listen on port ${port}`));
