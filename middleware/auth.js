/*const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {

  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(401).json({ msg: "No auth token, access denied" });

    const verified = jwt.verify(token, "passwordKey");
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });
  res.status(404).json({ error: 'Route not found' });

    req.user = verified.id;
    req.token = token;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
*/
/*const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res.status(401).json({ msg: "No auth token, access denied" });

        const verified = jwt.verify(token, "passwordKey");
        if (!verified)
            return res.status(401).json({ msg: "Token verification failed, authorization denied." });

        // Corrected route not found response
        res.status(404).json({ error: 'Route not found' });

        req.user = verified.id;
        req.token = token;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
*/
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res.status(401).json({ msg: "No auth token, access denied" });

        const verified = jwt.verify(token, "passwordKey");
        if (!verified)
            return res.status(401).json({ msg: "Token verification failed, authorization denied." });

        // Assign user id and token to request object
        req.user = verified.id;
        req.token = token;
        // Call next middleware in the chain
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
