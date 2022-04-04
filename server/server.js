const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const PORT= 5000;

app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.json());


const weatherRoute = require('./routes/weather');

app.use('/api', weatherRoute);

app.use(express.static('public'));


app.listen(PORT, () => { console.log("Server started on port: ", PORT)})