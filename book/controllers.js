const Book = require("./model");

const addBook =  async (request, response) => { 
    try {
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



    response.status(201).json(sucessResponse);
   } catch (error) {
     const failureResponse = {
        message: "error has landed",
        error: error,
      
    };
    response.status(501).json(failureResponse);

  };

   
};


const getAllBooks = async (request, response) => {
    const books = await Book.find({});

    const sucessResponse = {
        message: "book found",
        books: books,
    };

    response.send(sucessResponse);


    
}

const deleteOneBook = async (request, response) => {
    const book = await Book.deleteOne({title: request.body.title});

  const sucessResponse = {
     message: "book deleted",
      book: book,
};

response.send(sucessResponse);







}


const putBook = async (request, response) => {
    const index = await Book.updateOne({title: request.body.title},{author: request.body.author}); 

    const sucessResponse = {
        message: "book author changed",
        book: index,
    };

    response.send(sucessResponse);
}

const allBooks = async (request, response) => {
    const sucessResponse = {
        message: "All Books",
         book: books,
    };

    response.send(sucessResponse);
};

const oneBook = async (request, response) => {
    const book = await Book.findOne({title: request.params.title});
    
    const sucessResponse = {
        message: "One Book",
         book: book,
    };
    
    response.send(sucessResponse);

 };

 const dynamicChange = async (request, response) => { 
    const index = await Book.updateOne({title: request.body.title},{   [request.body.dynamicKey1]: request.body.dynamicValue1}); 
    const obj = {
        [request.body.dynamicKey1]: request.body.dynamicValue1,
    };

    const sucessResponse = {
        message: "Dynamic changed",
        book: index,
    };

    response.send(sucessResponse);
}

module.exports = {
    addBook: addBook,
    getAllBooks : getAllBooks,
    deleteOneBook : deleteOneBook,
    putBook : putBook,
    allBooks : allBooks,
    oneBook : oneBook,
    dynamicChange : dynamicChange,
};