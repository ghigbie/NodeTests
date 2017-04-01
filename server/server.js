const express = require("express");

let app = express();

app.get("/" (req, res) => {
    res.send("<h1>Yo!</h1>");
});

app.listen(3000, process.env.IP, () => {
    consle.log("Server is up on port 3000.");
});
