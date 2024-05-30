import React from 'react';
import { FetchDataFromExcel } from './utils/excelUtils';
import { GenerateCertificate } from './utils/pdfUtils';
import * as XLSX from 'xlsx';

const CertificateGenerator = () => {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const jsonData = await FetchDataFromExcel(file);
      jsonData.forEach((row) => {
        const name = row[0]; // Assuming the name is in the first column
        GenerateCertificate(name);
      });
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  };





  const FetchDataFromExcel = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
  
        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
        const sheet = workbook.Sheets[sheetName];
        
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        resolve(jsonData);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsArrayBuffer(file);
    });
  };

  


  return (
    <div>
      <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" />
    </div>
  );
};

export default CertificateGenerator;
