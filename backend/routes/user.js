const { users, validate } = require('../models/user');
const config = require('config');
const _ = require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
  const user = await users.find().sort('name');
  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await users.findOne({ email: req.body.email });
  let name = await users.findOne({ name: req.body.name });

  if (user) return res.status(400).send('User already registerd');

  if (name) return res.status(400).send('Name already taken');

  user = await new users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();

  const token = user.generateAuthToken();

  res.send({ success: ' register sucess' });
});

module.exports = router;
