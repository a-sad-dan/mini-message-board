const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send(`Form to add new Message`));
newRouter.post("/", (req, res) => res.send(`Message Added to Board`));

module.exports = newRouter;
