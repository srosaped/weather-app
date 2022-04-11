const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

/* const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const guard = require('express-jwt-permissions')();

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-5kwozwxq.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://userdata-api.com',
  issuer: 'https://dev-5kwozwxq.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck); */

/* app.get('/userdata', guard.check(['read:userdata']), function (req, res) {
    res.json({
        user1: "first user", 
        user2: "second user",
    });
}); */


app.use(express.urlencoded({ extended: true} ));
app.use(express.json());
app.use(cors());

app.use('/api/', require('./routes/weather'));

app.use(express.static('public'));

app.listen(port, () => { console.log(`Server started on port: ${port}`)})

