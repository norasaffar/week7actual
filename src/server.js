const express = require("express");

const app = express();

app.use(express.json());

const books = [];

app.post("/book", (request, response) =>{
    books.push(request.body);

    const sucessResponse = {
        message:"book added",
        books: books,
    };

    response.send(sucessResponse);
});

//[books-array]//find index array method // Element// objects
app.get("/book", (request, response) => {
    const index = books.findIndex((x) => x.title === request.body.title);

    const sucessResponse = {
        message: "book found",
        book: books[index],
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

app.delete( "/book", (request, response) => {
 const index =  books.findIndex((x) => x.title === request.body.title);
 
  books.splice(index, 1);

  const sucessResponse = {
     message: "book deleted",
      book: books,
};

response.send(sucessResponse);


}); 


app.put("/book", (request, response) => {
    const index =  books.findIndex((x) => x.title === request.body.title); 

  books[index].author = request.body.author

    const sucessResponse = {
        message: "books listed",
        book: books[index],
    };

    response.send(sucessResponse);

    // console.log(`Person element at index ${index}: `, myArray[index]);

    // myArray[index].personName = "betty";
    // console.log(myArray[index]);

    
});



app.listen(5001, () => {
    console.log("server is listening on port 5001");
});
