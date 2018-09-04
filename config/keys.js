// keys.js - figure out what set of credetials to return

if (process.env.NODE_ENV === 'production') {
  // prod. env - return the prod keys
  module.exports = require('./prod')
} else {
  // dev. env - return the dev keys
  module.exports = require('./dev')
}
