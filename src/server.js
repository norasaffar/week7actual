require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("../db/connection");

const Book = require("../book/model");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());



connection();


// app.get('/:name', function (request, response){
//    console.log(request.params);
//    response.send();

// });


app.post("/book", async (request, response) => {
    const book = await Book.create({
        title: request.body.title,
        author:  request.body.author,
        genre:  request.body.genre,
    });

    const sucessResponse = {
        message:"book added",
        book: book,
    };

    response.send(sucessResponse);
});
//[books-array]//find index array method // Element// objects



app.get("/book", async (request, response) => {
    const books = await Book.find({});

    const sucessResponse = {
        message: "book found",
        books: books,
    };

    response.send(sucessResponse);
});
//HTTP HYPER TEXT TRANSFER PROTOCOL




app.get("/book/allBooks", (request, response) => {
    const sucessResponse = {
        message: "All Books",
         book: books,
    };

    response.send(sucessResponse);
});

///////
app.get('/book/:title', async (request, response) => {
    const book = await Book.findOne({title: request.params.title});
    
    const sucessResponse = {
        message: "One Book",
         book: book,
    };
    
    response.send(sucessResponse);

 });

app.delete( "/book", async (request, response) => {
    const book = await Book.deleteOne({title: request.body.title});

  const sucessResponse = {
     message: "book deleted",
      book: book,
};

response.send(sucessResponse);
}); 





app.put("/book", async (request, response) => {
    
    const index = await Book.updateOne({title: request.body.title},{author: request.body.author}); 

    const sucessResponse = {
        message: "book author changed",
        book: index,
    };

    response.send(sucessResponse);
});



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
