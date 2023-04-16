const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {

    console.log(req.headers.authorization.split(' ')[1])
    // Get token from header
    const token = req.headers.authorization.split(' ')[1]

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;
        next();
    } catch (err) {
        console.error("something wrong with auth middleware");
        res.status(500).json({ msg: "Server Error" });
    }
};
