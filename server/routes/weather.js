const express = require('express');

const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

let router = express.Router();

require('dotenv').config();



const apiKey = process.env.API_KEY;

const cities = ["Lisbon","Leiria", "Coimbra", "Porto", "Faro"];

/* for(let i=0; i < cities.length; i++) {
     cities[i]
} */
const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${apiKey}`;

console.log(cities)

router.get("/", (req, res) => {
    fetch(url_api)
        .then(res => {return res.json() })
            .then(data => { 
                res.send(data)
                console.log(data)
            });
})

module.exports = router;
