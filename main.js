"use strict";

const port = 3000,
 express = require("express"), //add express module to aplication
 app = express(); // assign the express application to app constant

app.get("/", (req, res) => { // set up a get rote for home page

   res.send("Hello, Universe!"); //issue response from server with re.send
})
 .listen(port, () => { //
   console.log(`The Express.js server has started and is listening on port number: ${port}`);
 }); //set up application to listen at port 30000
