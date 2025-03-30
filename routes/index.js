const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Welcome to the board"));

module.exports = indexRouter;