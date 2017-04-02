const express = require("express");

const port = process.env.PORT || 3000;

let app = express();

app.get("/", (req, res) => {
    res.send("<h1>Yo!</h1>");
});

app.listen(port, process.env.IP, () => {
    console.log(`Sever is up on port ${port}.`);
});

modules.exports.app = app;
