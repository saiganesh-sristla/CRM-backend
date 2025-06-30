const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')

// POST /api/companies
router.post('/', companyController.createCompany);

// GET /api/companies
router.get('/', companyController.getAllCompanies);

// GET /api/companies/:id
router.get('/:id', companyController.getCompanyById);

module.exports = router;