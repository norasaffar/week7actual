const { Router } = require("express");
const bookRouter = Router();

const {addBook} = require("./controllers");

bookRouter.post("/book", addBook);

module.exports = bookRouter;