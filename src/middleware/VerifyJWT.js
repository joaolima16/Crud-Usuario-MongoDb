const jwt  = require("jsonwebtoken")
function verifyJWT(req,res,next){
    const token = req.headers["x-access-token"]
    if(!token){return res.json({status:"error",msg:"Preciso do token!" })}
    else{
        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            if(err){return res.json({status:"failed",msg:"Token invalido"})}
            next()
        })
    }
}
module.exports = verifyJWT;