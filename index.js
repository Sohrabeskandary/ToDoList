import express from "express";

const app = express();
const port = 3000;
var newItem = [];
var workItem = [];
var personalItem = [];
var groceryItem = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { newItem });
});

app.post("/", (req, res) => {
    newItem.push(req.body.todo);
    res.redirect("/");
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { workItem });
});

app.post("/work", (req, res) => {
    workItem.push(req.body.worktodo);
    res.redirect("/work");
});

app.listen(port, () => {
    console.log("server is running on port 3000");
});

app.get("/grocery", (req, res) => {
    res.render("grocery.ejs", { groceryItem });
});

app.post("/grocery", (req, res) => {
    groceryItem.push(req.body.todo);
    res.redirect("/grocery");
});

app.get("/personal", (req, res) => {
    res.render("personal.ejs", { personalItem });
});

app.post("/personal", (req, res) => {
    personalItem.push(req.body.todo);
    res.redirect("/personal");
});
