const express = require('express');

const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

const router = express.Router();

require('dotenv').config();


const cityID = process.env.CITY_IDS
const apiKey = process.env.API_KEY;

let url_api = `https://api.openweathermap.org/data/2.5/group?id=${cityID}&appid=${apiKey}`;



router.get("/", (req, res) => {
    
    fetch(url_api)
        .then(res => {return res.json() })
            .then(data => { 
                res.send(data)
            });
})

module.exports = router;
