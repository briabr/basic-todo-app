const { application } = require("express");

const router = require("express").Router();

const todoRoutes = require("./todosRoutes")
router.use("/todos", todoRoutes)



module.exports = router;