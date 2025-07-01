const Company = require('../models/Company');


const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (err) {
    res.status(404).json({ error: 'Company not found' });
  }
}

const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({
      message:"company deleted successfully"
    })
  } catch (err) {
    res.status(404).json({ error: 'Company not found' });
  }
}

module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    deleteCompany
}