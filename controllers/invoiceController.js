const Invoice = require('../models/Invoice');
const Counter = require('../models/Counter');
const generatePdf = require('../utils/generatePdf');

const createInvoice = async (req, res) => {
  try {
    let counter = await Counter.findOne({ name: 'invoice' });
    if (!counter) {
      counter = await Counter.create({ name: 'invoice', value: 1 });
    } else {
      counter.value++;
      await counter.save();
    }

    const invoice = await Invoice.create({
      ...req.body,
      invoiceNumber: counter.value
    });

    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.find().populate('deal');
  res.json(invoices);
}

const downloadInvoice =  async (req, res) => {
  const invoice = await Invoice.findById(req.params.id).populate('deal');
  if (!invoice) return res.status(404).json({ error: 'Invoice not found' });

  const pdfBuffer = await generatePdf(invoice);
  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=invoice.pdf',
  });
  res.send(pdfBuffer);
}


module.exports = {
    createInvoice,
    getAllInvoices,
    downloadInvoice
}