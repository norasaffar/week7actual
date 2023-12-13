const Book = require("./model");

const addBook =  async (request, response) => {
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
};

module.exports = {
    addBook: addBook,
};