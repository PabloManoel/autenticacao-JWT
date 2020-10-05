const jwtHelper = require("../helpers/jwt");

function login(req, res, next) {
  if (req.body.user === "primeiro" && req.body.pwd === 'primeiro') {
    const token = jwtHelper.generateToken({ id: 1 })

    return res.status(200).send(
      {
        auth: true,
        token: token
      }
    );

  } else if (req.body.user === "segundo" && req.body.pwd === 'segundo') {
    const token = jwtHelper.generateToken({ id: 2 })

    return res.status(200).send(
      {
        auth: true,
        token: token
      }
    );
  } else {
    return res.status(404).send(
      {
        status: "user not found in database"
      }
    );
  }
}

function logout(req, res, next) {
  res.json(
    {
      auth: false,
      token: null
    }
  );
}

module.exports = {
  login,
  logout,
}