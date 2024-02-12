const mongoose = require("mongoose");
const db = "mongodb+srv://brian:admin@cluster0.auydbrx.mongodb.net/?retryWrites=true&w=majority";

// Set options when creating a new connection
const mongooseOptions = {
  useNewUrlParser: true
};

const connectDB = async () => {
  try {
    await mongoose.connect(db, mongooseOptions);
    console.log("MongoDB is Connected.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
