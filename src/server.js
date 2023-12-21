require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("../db/connection");

const Book = require("../book/model");

const bookRouter = require("../book/routes")

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

connection();

app.use(bookRouter)


// app.get('/:name', function (request, response){
//    console.log(request.params);
//    response.send();

// });
//[books-array]//find index array method // Element// objects

//HTTP HYPER TEXT TRANSFER PROTOCOL




app.put("/book/update", async (request, response) => { 
    const index = await Book.updateOne({title: request.body.title},{   [request.body.dynamicKey1]: request.body.dynamicValue1}); 
    const obj = {
        [request.body.dynamicKey1]: request.body.dynamicValue1,
    };

    const sucessResponse = {
        message: "Dynamic changed",
        book: index,
    };

    response.send(sucessResponse);
});
    





app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


//HxV0bxEL62itGgiG//


// const sucessResponse = {
    //    message : "We've got a dynamic Object!",
    //    dynamicObj: obj,  
    // };
