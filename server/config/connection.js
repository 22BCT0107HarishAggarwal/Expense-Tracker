const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://harishaggarwal2516:Harish25012005@expensetracker.krvya9s.mongodb.net/test?retryWrites=true&w=majority&appName=EXPENSETRACKER', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
