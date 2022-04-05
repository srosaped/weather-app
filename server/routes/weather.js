const express = require('express');

const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

let router = express.Router();

const dotenv = require('dotenv');
dotenv.config();



router.get("/", (req, res) => {

    const url_api = `https://api.openweathermap.org/data/2.5/weather?id=2267057&appid=360d72420b151887160f1711b398855f`;

    fetch(url_api)
        .then(res => {return res.json() })
            .then(data => { 
                console.log(data)
                res.send(data)
            });
})


module.exports = router;
