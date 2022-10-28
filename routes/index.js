const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes")
const apiRoutes = require('./api')

//html routes
//GET / - home page
router.use(htmlRoutes)

// API ROUTES
router.use("/api", apiRoutes)

//GET /api/todos - gets all the todos
//GET /api/todos/:id - gets one todo
// POST /api/todos - creates todo
//PUT /api/todos/:id -update a todo
//DELETE /api/todos/:id - deletes a todo 



module.exports = router;