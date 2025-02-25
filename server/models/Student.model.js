const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  linkedinUrl: String,
  languages: Array,
  program: String,
  background: String,
  image: String,
  cohort: Number,
  projects: Array,
});

// CREATE MODEL
// The model() method defines a model (Book) and creates a collection (books) in MongoDB
// The collection name will default to the lowercased, plural form of the model name:
//                          "Book" --> "books"
const Student = mongoose.model("Student", studentSchema);

// EXPORT THE MODEL
module.exports = Student;
