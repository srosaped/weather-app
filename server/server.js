const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
/* const { auth, requiresAuth } = require('express-openid-connect');

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged Out');
});

app.get('/profile',requiresAuth(), (req,res) => {
    res.send(JSON.stringify(req.oidc.user))
});
 */

app.use(express.urlencoded({ extended: true} ));
app.use(express.json());
app.use(cors());

app.use('/api/', require('./routes/weather'));

app.use(express.static('public'));

app.listen(port, () => { console.log(`Server started on port: ${port}`)})



