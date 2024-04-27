const auth = require('../routes/auth');
const users = require('../routes/user');

// const error = require('../middleware/error');
const express = require('express');

module.exports = function (app) {
  app.get('/', async (req, res) => {
    return res.status(200).send('Hello Welcome to Libary 🚀 ');
  });

  app.use(express.json());

  app.use('/api/users', users);
  app.use('/api/auth', auth);
};
