const { Router } = require("express");
const bookRouter = Router();

const {addBook, getAllBooks,deleteOneBook, putBook, allBooks, oneBook, dynamicChange} = require("./controllers");

bookRouter.post("/book", addBook);

bookRouter.get("/book",getAllBooks);


bookRouter.delete( "/book",deleteOneBook);

bookRouter.put("/book",putBook);

bookRouter.get("/book/allBooks",allBooks);

bookRouter.get('/book/:title',oneBook);


bookRouter.put("/book/update", dynamicChange);
    


module.exports = bookRouter;