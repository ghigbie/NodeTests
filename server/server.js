const express = require("express");

const port = process.env.PORT || 3000;

let app = express();

app.get("/", (req, res) => {
    res.status(404).send({
        error: "Page not found"
    });
});

app.listen(port, process.env.IP, () => {
    console.log(`Sever is up on port ${port}.`);
});

module.exports.app = app;
