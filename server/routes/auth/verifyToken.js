const jwt = require("jsonwebtoken");

function verifyToken(req, res, next){
    const jwtToken = req.headers.authorisation(" ")[1];
    try{
        if(!jwtToken)throw "Invalid Token";
        const tokenDecoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        req.userID = tokenDecoded.id;
        next();
    }catch(error){
        return res.status(401).json({error});
    }
}

module.exports = verifyToken; 