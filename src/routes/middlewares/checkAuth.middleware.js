const jwt = require("jsonwebtoken");
var formatter = require('../../services/json-formatter-service');

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(400).json(formatter.formatJsonRespoonse(false,"Access Denied!, no token entered", 401, {}));
  

  try {
    const verified = jwt.verify(token, process.env.jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json(formatter.formatJsonRespoonse(false,"auth failed, check auth-token", 401, {}));
  }
};