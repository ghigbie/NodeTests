var db = require("./db.js");

module.exports.handleSignup = (email, password) => {
        //Check if email already exists
        //then saves user to database
        bd.saveUser({
            email,
            password
        });
        //send a welcome email
};
