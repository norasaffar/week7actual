const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to MongoDB on the cloud");
   };


   module.exports = connection;