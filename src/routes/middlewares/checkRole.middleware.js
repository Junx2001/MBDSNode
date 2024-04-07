var formatter = require('../../services/json-formatter-service');

module.exports = (roleArray) => (req, res, next) => {
    if (!req.user) {
      return res.status(401).json(formatter.formatJsonRespoonse(false,"Session expired", 401, { code : "SESSION_EXPIRED"}));

    }
    var authorized = false;
    //if user has a role that is required to access any API
    try {
      roleArray.forEach((role) => {
        authorized = req.user.role === role;
      });
      if (authorized) {
        return next();
      }
    } catch (excep) {
      console.log(excep);
    }

    return res.status(401).json(formatter.formatJsonRespoonse(false,"Unauthorized", 401, {}));
  };
  