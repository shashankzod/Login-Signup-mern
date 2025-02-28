const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/',ensureAuthenticated,(req, res)=>{
    res.status(200).json([
        {
            name: "Hello BOI",
            msg :"How r you my friend"
        },
        
    ])
})

module.exports = router