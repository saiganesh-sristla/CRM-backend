const express = require('express');
const router = express.Router();
const Deal = require('../models/Deal');

router.post('/', async (req, res) => {
  const deal = await Deal.create(req.body);
  res.status(201).json(deal);
});

router.get('/', async (req, res) => {
  const deals = await Deal.find().populate('company').populate('contact');
  res.json(deals);
});

router.get('/:id', async (req, res) => {
  const deal = await Deal.findById(req.params.id).populate('company').populate('contact');
  res.json(deal);
});

module.exports = router;
