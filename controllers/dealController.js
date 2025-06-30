const Deal = require('../models/Deal');

const createDeal = async (req, res) => {
  const deal = await Deal.create(req.body);
  res.status(201).json(deal);
}

const getAllDeals = async (req, res) => {
  const deals = await Deal.find().populate('company').populate('contact');
  res.json(deals);
}

const getDealById = async (req, res) => {
  const deal = await Deal.findById(req.params.id).populate('company').populate('contact');
  res.json(deal);
}

const updateDeal = async (req, res) => {
  const deal = await Deal.findById(req.params.id);
  const data = req.body;

  await deal.updateOne(data);
  res.json(deal);
}


module.exports = {
    createDeal,
    getAllDeals,
    getDealById,
    updateDeal
}