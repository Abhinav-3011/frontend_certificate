import jsPDF from 'jspdf';

const generateCertificate = (name) => {
  const doc = new jsPDF();
  doc.text(`This certificate is awarded to ${name}`, 10, 10);
  doc.save(`${name}_certificate.pdf`);
};
