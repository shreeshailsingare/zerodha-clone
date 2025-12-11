const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.json({ success: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret123");
    req.user = decoded;
    next();
  } catch (err) {
    return res.json({ success: false, message: "Invalid token" });
  }
}

module.exports = { verifyToken };
