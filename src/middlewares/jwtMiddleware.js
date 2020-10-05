var jwtHelper = require("../helpers/jwt");

async function validateJWT(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token) {
    // TODO: encapsular retorno
    return res.status(401).json(
      {
        auth: false,
        message: 'Nenhum token foi fornecido'
      }
    );
  }

  try {
    const jwtDecoded = jwtHelper.getDecodedToken(token);
    console.log("decodou jwt")
    req = incrementRequestWithJWTInfo(req, jwtDecoded);
    console.log("incrementouRequisicao")
    next();
  } catch (error) {
    res.status(401).send({error});
  }
}

function incrementRequestWithJWTInfo(req, jwtDecoded){
  const user = {
    id: jwtDecoded.id
  }
  req.user = user;
  return req;
}

module.exports = validateJWT;