const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes");
const newRouter = require("./routes/new");
const messages = require("./data/messages");

const app = express();

// setup app properties for views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve Static Assets
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

//Navbar Links
const links = [
  { href: "/", text: "Message Board" },
  { href: "/new", text: "Post a Message" },
]

app.get("/", (req, res) => res.render("index", { links: links, messages: messages }));
app.get("/new", (req, res) => res.render("new", { links: links }));

const PORT = 6969;
app.listen(PORT, () => console.log(`Message Board is live on http://localhost:${PORT}`));