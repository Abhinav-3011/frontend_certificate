import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import Download from './Download/Download.jsx'; // Assuming Download is your existing component

const CertificatePrintable = () => {
  const componentRef = useRef();
  const login_check_value = useSelector((state) => state.counter.templateSelect);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.html(componentRef.current, {
      callback: () => {
        doc.save('certificate.pdf');
      },
    });
  };

  return (
    <div>
      {login_check_value === 1 && (
        <Download ref={componentRef} />
      )}

      <button onClick={handlePrint}>Print</button>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default CertificatePrintable;
