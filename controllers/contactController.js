const Contact = require('../models/Contact');


const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find().populate('company');
  res.json(contacts);
}

const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id).populate('company');
  res.json(contact);
}

module.exports = {
    createContact,
    getAllContacts,
    getContactById
}