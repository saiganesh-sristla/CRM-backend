const PDFDocument = require('pdfkit');

module.exports = async function generatePdf(invoice) {
  const doc = new PDFDocument();
  let buffers = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {});

  doc.fontSize(18).text('Invoice', { align: 'center' });
  doc.moveDown();
  doc.text(`Invoice #: ${invoice.invoiceNumber}`);
  doc.text(`Date: ${invoice.date.toDateString()}`);
  doc.text(`Amount: ₹${invoice.amount}`);
  doc.text(`Deal ID: ${invoice.deal._id}`);

  doc.end();

  return new Promise((resolve) => {
    doc.on('end', () => {
      resolve(Buffer.concat(buffers));
    });
  });
};
