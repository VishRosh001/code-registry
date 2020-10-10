const jwt = require("jsonwebtoken");

function verifyToken(req, res, next){
    const token = req.header("auth-token");
    if(!token)return res.status(401).send("Invalid token");
    
    try{
        req.isVerified = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch(error){
        res.status(401).send("Invalid token");
    }

}

module.exports = verifyToken; 