const express = require("express");

const app = express();
// http://localhost:5001/example
app.use("/", express.static("example"));

app.listen(5001, () =>{
    console.log("server is listening on port 5001");
});