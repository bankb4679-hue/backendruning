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

// GET all departments
app.get("/department", (req, res) => {
  res.send(department);
});

// GET department by id
app.get("/department/:id", (req, res) => {
let id =req.params.id;
let findD = department.findIndex((e) => e.id=id);
if (findD=-1) res.send("ไม่พบข้อมูล");
res.send(department [findD]);
});

// POST department
app.post("/department", (req, res) => {
  let newDepartment = {
    id: department.length + 1,
    name: req.body.name,
  };
  department.push(newDepartment);
  res.send(department);
});

app.put("/department/:id", (req, res) =>{
let id = req.params.id;
let findD = department.findIndex((e) => e.id == id);
if (findD == -1) res.send("ไม่พบข้อมูล");
department [findD].name = req.body.name;
res.send(department [findD]);
});

app.put("/department/:id", (req, res) =>{
let id = req.params.id;
let findD = department.findIndex((e) => e.id == id);
if (findD == -1) res.send("ไม่พบข้อมูล");
let deleteD =   department.slice(findD, 1);
res.send(deleteD);
});

app.listen(port, () => {
  console.log("Server Starting on port", port);
});
