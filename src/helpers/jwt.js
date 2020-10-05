require("dotenv-safe").config();

var jwt = require('jsonwebtoken');

function generateToken(data) {
  const token = jwt.sign(data, process.env.SECRET, {
    // expiresIn: process.env.TOKEN_TTL
    expiresIn: 300
  });

  return token;
}

function getDecodedToken(token) {
    return jwt.verify(token, process.env.SECRET);
}

module.exports = {
  generateToken,
  getDecodedToken,
}