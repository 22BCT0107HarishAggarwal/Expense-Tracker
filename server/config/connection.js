const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harishaggarwal2516:zYMBjDsaQHf9tLw7@expensetracker.krvya9s.mongodb.net/?retryWrites=true&w=majority&appName=EXPENSETRACKER', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
