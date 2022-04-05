const express = require('express');

const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

let router = express.Router();

require('dotenv').config();



const apiKey = process.env.API_KEY;
const cities = ["Lisbon","Leiria", "Coimbra", "Porto", "Faro"];
const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${apiKey}`;

switch (cities) {
    case "Portugal":
        cities[0]
        break;
    case "Leiria":
        cities[1]
        break;
    case "Coimbra":
        cities[2]
        break;
    case "Porto":
        cities[3]
        break;
    case "Faro":
        cities[4]
        break;
    default:
        "not a city"
        break;
}



router.get("/", (req, res) => {
    fetch(url_api)
        .then(res => {return res.json() })
            .then(data => { 
                console.log(data)
                res.send(data)
            });
})

module.exports = router;
