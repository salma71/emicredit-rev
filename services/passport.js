const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        // this is a promise
        if (existingUser) {
          // we already have a record of the profile ID
          done(null, existingUser)
        } else {
          // make a new instance for the user
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user))
        }
      })
    }
  )
)
