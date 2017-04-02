const express = require("express");

const port = process.env.PORT || 3000;

let app = express();

app.get("/", (req, res) => {
    res.status(404).send({
        error: "Page not found",
        name: "Todo App v1.0"
    });
});

app.get("/users", (req, res) => {
    res.status(200).send([{
                name: "Billy",
                age: 34
            },{
                name: "Beth",
                age: 35
            },{
                name: "Joe",
                age: 25
    }]);
});

app.listen(port, process.env.IP, () => {
    console.log(`Sever is up on port ${port}.`);
});

module.exports.app = app;
