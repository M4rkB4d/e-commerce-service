const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.header('Authorization'); // Get token from request header
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const verified = jwt.verify(token, 'secretkey'); // Verify token
    req.user = verified; // Attach user info to the request
    next(); // Proceed to the next middleware/route
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
}

module.exports = verifyToken;
