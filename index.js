const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

let department = [
    { id: 1, name: "IT" },
    { id: 2, name: "DBT" },
];

app.get("/", (req, res) => {
    res.send("Mr.Watthana puangthaisong");
});

app.get("/department", (req, res) => {
    res.send(department);
});

app.post("/department", (req, res) => {
    let newDepartment = {
        id: department.length + 1,
        name: req.body.name,
    };
    department.push(newDepartment);
    res.send(department);
});

app.listen(port, () => {
    console.log("Server Starting on port", port);
});
