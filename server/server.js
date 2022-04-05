const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');


app.use(express.urlencoded({ extended: true} ));
app.use(express.json());
app.use(cors());

const weatherRoute = require('./routes/weather');

app.use('/api', weatherRoute);

app.use(express.static('public'));


app.listen(port, () => { console.log("Server started on port: ", port)})