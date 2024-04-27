const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect(
      'mongodb+srv://Admin:Admin@mohan.mtjj61n.mongodb.net/?retryWrites=true&w=majority&appName=Mohan',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(' Connected to Db '))
    .catch((err) => console.log('not connected to Db', err));
};
