const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// clientId:  
// clientSectet:  

passport.use(new GoogleStrategy());


// means in the production use the provided port
// otherwise in the development env use port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT)
