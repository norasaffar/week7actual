require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const connection = async () => {
 await mongoose.connect(process.env.MONGODB_URI);
 console.log("connected to MongoDB on the cloud");
};

connection();

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    author:{
        type: String,
    },
    genre:{
        type: String,
    },
});

//X

const Book = mongoose.model("Book", bookSchema);

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
