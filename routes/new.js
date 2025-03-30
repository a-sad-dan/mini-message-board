const { Router } = require("express");
const messages = require("../data/messages");


//Navbar Links
const links = [
  { href: "/", text: "Message Board" },
  { href: "/new", text: "Post a Message" },
]

const newRouter = Router();
newRouter.get("/", (req, res) => res.render("form", { links: links }));

newRouter.post("/", (req, res) => {
  console.log(req.body)
  const { text, user } = req.body;


  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
}
);

module.exports = newRouter;
