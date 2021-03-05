const express = require("express");

const app = express();
const port = 5000;


app.get("/", (req, res) => res.send("Hello World!"));
app.get("/backend", (req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    var jsonObj = {
        backend: 'Backend is Connected',
        something: 'idk what else to put'
    }


    res.end(JSON.stringify(jsonObj))
});

app.listen(port, () => console.log(` test liten on port ${port}`));