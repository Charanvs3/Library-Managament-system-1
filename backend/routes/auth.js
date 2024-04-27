const { users } = require('../models/user');

const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  try {
    let user = await users.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('invalid email or password');

    const validpassword = user.password;

    if (!validpassword)
      return res.status(400).send('invalid email or password');

    res.send({ success: 'success' });
  } catch (err) {
    console.log(err);
  }
});

function validate(req) {
  const schema = {
    password: Joi.string().min(5).max(200).required(),
    email: Joi.string().email().min(5).max(200).required(),
  };
  return Joi.validate(req, schema);
}

module.exports = router;
