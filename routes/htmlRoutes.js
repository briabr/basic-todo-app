const router = require("express").Router();


//html routes
//GET / - home page
router.get("/",(req, res) => {
    res.send("This is the homepage.")
})






module.exports = router;