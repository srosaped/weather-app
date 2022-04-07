const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();


app.use(express.urlencoded({ extended: true} ));
app.use(express.json());
app.use(cors());

app.use('/api/', require('./routes/weather'));

app.use(express.static('public'));

app.listen(port, () => { console.log(`Server started on port: ${port}`)})



