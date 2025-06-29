const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const contacts = await Contact.find().populate('company');
  res.json(contacts);
});

router.get('/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id).populate('company');
  res.json(contact);
});

module.exports = router;