const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')

// POST /api/companies
router.post('/', companyController.createCompany);

// GET /api/companies
router.get('/', companyController.getAllCompanies);

// GET /api/companies/:id
router.get('/:id', companyController.getCompanyById);

// DELETE /api/companies/:id
router.delete('/:id', companyController.deleteCompany);


module.exports = router;