const router = require("express").Router();

const jwt = require("jsonwebtoken");

router.post("/authUser",
    async (req, res)=>{
        const jwtToken = req.headers.authorisation;
        try{
            if(!jwtToken)throw "Invalid Token";
            const tokenDecoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
            req.userID = tokenDecoded.id;
            res.json({valid: true});
        }catch(error){
            return res.status(401).json({error: error, valid: false});
        }
    }
);

module.exports = router;