const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const toDoList = ["Buy Food", "Cook Food", "Eat Food"];
const workList = [];


app.get("/", function (req, res) {
    const day = date.getDate();


    res.render('list', { listTitle: day.toLocaleUpperCase(), todolist: toDoList });
});

app.post("/", function (req, res) {
    const newTodo = req.body.todo;

    if (req.body.list.toLowerCase() === "work".toLowerCase()) {
        workList.push(newTodo);
        res.redirect("/work");
    } else {
        toDoList.push(newTodo);
        res.redirect("/");
    }
    console.log(req.body);

});

app.get("/work", function (req, res) {
    let title = "work list";
    res.render('list', { listTitle: title.toUpperCase(), todolist: workList });
});

app.post("/work", function (req, res) {
    const newWork = req.body.todo;
    workList.push(newWork);
    res.redirect("/work");
});

app.get("/about", function (req, res) {
    res.render("about");
});
app.listen(3000, function () {
    console.log("server has started 3000");
});