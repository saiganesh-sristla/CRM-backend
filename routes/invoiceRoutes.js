const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController')

router.post('/', invoiceController.createInvoice);

router.get('/', invoiceController.getAllInvoices);

router.get('/download/:id', invoiceController.downloadInvoice);

router.delete('/:id', invoiceController.deleteInvoice);

module.exports = router;
