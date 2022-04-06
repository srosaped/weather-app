const express = require('express');

const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

let router = express.Router();

require('dotenv').config();



const apiKey = process.env.API_KEY;


let city = "Lisboa";
let url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

console.log(city)

router.get("/", (req, res) => {
    
    fetch(url_api)
        .then(res => {return res.json() })
            .then(data => { 
                res.send(data)
                console.log(data)
            });
})

module.exports = router;
