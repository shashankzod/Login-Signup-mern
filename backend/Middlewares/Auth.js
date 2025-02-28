const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req,res,next)=>{
    const auth = req.headers['authorization']
    if(!auth){
        return res.status(403)
            .json({message: 'Unauthorized, JWT Token is require'})
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401)
        .json({message: 'Unauthorized, JWT Token is wrong or expired'})
    }
}
module.exports = ensureAuthenticated