const router = require("express").Router();

const CodeSnippet = require("../database/models/CodeSnippet");

router.get("/get", async(req, res)=>{
    try{
        let snippets = await CodeSnippet.find({}, {snippet: 0}).sort({_id:-1}).limit(10);
        return res.json({data: snippets});
    }catch(error){
        return res.status(401).send(error);
    }
})

module.exports = router;