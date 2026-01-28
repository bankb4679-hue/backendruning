const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Mr.Watthana puangthaisong");
});

app.listen(port, () => {
    console.log("Server Starting on port", port);
});

