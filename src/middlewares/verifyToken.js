const { verify } = require("jsonwebtoken");
const config = require("../utils/config");

function verifyToken(req, res, next) {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "No token provided"
    });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  verify(token, config.secret, (error, decodedToken) => {
    if (error) {
      return res.status(401).json({
        auth: false,
        message: "Token is not valid"
      });
    } else {
      req.userId = decodedToken.id;
      next();
    }
  });
}

module.exports = verifyToken;
