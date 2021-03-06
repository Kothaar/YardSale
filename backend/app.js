const express = require("express");
const axios = require('axios');
const request = require('request')
const dotenv = require("dotenv");

dotenv.config()

const app = express();
const port = 5000;
const API = 'https://api.nasa.gov/planetary/apod?api_key=';
const KEY = process.env.REACT_APP_NASA_KEY;
const url = API+KEY

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/backend", (req, res) =>{
    console.log("test")
    request (
        url,
        function(error,response,data){
            if(!error){
                var json = JSON.parse(data);
                var title = json['title']
                console.log(title)
                res.send(json);
            }
        }
    )
});

app.listen(port, () => console.log(` test listen on port ${port}`));