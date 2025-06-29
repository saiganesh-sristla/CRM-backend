const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// POST /api/companies
router.post('/', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/companies/:id
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (err) {
    res.status(404).json({ error: 'Company not found' });
  }
});

module.exports = router;