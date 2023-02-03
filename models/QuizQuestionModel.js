const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
  adminId: { type: String },
  class: { type: String },
  quizName: { type: String },
  quizPin: { type: String, unique: true },
  quizId: { type: String, unique: true },
  quizSubject: { type: Array },
  subjectToBePlayedByPlyers: { type: Array },
  multiple: { type: Boolean },
  quizMultiplePassword: { type: Array },
});

const quizModel = mongoose.model("quiz-collection", quizSchema);

module.exports = quizModel;
