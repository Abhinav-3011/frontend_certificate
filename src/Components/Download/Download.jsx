import React, { useRef, useState, useEffect } from 'react';
import "../template/template.css";
import "../template/teamplate2.css";
import QRCode from "react-qr-code";
import Logo from '../template/Logo.png';
import { useSelector } from 'react-redux';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios"
import { currentDateTime } from '../Date/Date';
import Swal from "sweetalert2"
const Download = () => {
  const register_data=useSelector((state)=>state.counter.register_data_email)
  const data = useSelector((state) => state.counter.data);
  const templateSelect=useSelector((state)=>state.counter.templateSelect)
  const login_check_value = useSelector((state) => state.counter.value);
  const pdfref = useRef();
  const [certificateData, setCertificateData] = useState({
    name: '',
    department: '',
    event: '',
    date: currentDateTime,
  });

  useEffect(() => {
    if (data.length > 0) {
      setCertificateData({
        name: data[0].Name,
        department: data[0].Department,
        event: data[0].Event,
        date: currentDateTime,
      });
    }
  }, [data]);

  const generatePDF = (canvas, i) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgx = (pdfWidth - (imgWidth * ratio)) / 2; // Center the image horizontally
    const imgy = 30;
    pdf.addImage(imgData, "PNG", imgx, imgy, imgWidth * ratio, imgHeight * ratio);
    pdf.save(`certificate${i + 1}.pdf`);
  };

  const downloadpdf = async () => {


    if(login_check_value && data.length>0)
      {
    for (let i = 0; i < data.length; i++) {
      setCertificateData({
        name: data[i].Name,
        department: data[i].Department,
        event: data[i].Event,
        date: currentDateTime,
      });

      // Wait for the state to update and the QR code to render
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const input = pdfref.current;
      html2canvas(input).then((canvas) => generatePDF(canvas, i));
    }

//  after download of multiple file we have send to a request on the backend

    let res=await axios.post("https://backend-8f68.onrender.com/send_to_mail",{
      value:login_check_value,
      data:data,
      templateSelect:templateSelect,
      register_data:register_data

    })


    if(res.data==false)
      {
        
        Swal.fire({
          position: "top",
          icon: "error",
          title: res.data,
          showConfirmButton: false,
          timer: 1000
        });
      }
      else
      {
        Swal.fire({
          position: "top",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    else
    {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "please upload the data and also login",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  if (Number(login_check_value) === 1) {
    return (
      <>
        <div className="certificate-temp" ref={pdfref}>
          <img className="logo-temp" src={Logo} alt="Logo" />
          <h1 className="heading-temp">Certificate of Achievement</h1>
          <div className="achievement-temp">This Certificate is Issued To</div>
          <div className="achievement-temp">
            Mr/Ms: <span style={{ marginLeft: "10px" }} className='mr'>{certificateData.name}</span>
            <span style={{ marginLeft: "10px" }} className='department'>{certificateData.department}</span>
            <span style={{ marginLeft: "10px" }}> Department</span>
          </div>
          <div className="achievement-temp">
            For Completing <span style={{ marginLeft: "10px", color: "green" }} className='event'>{certificateData.event}</span>
            <span style={{ marginLeft: "10px" }}>with excellence & Declaration</span>
          </div>
          <div style={{ height: 'auto', margin: '0 auto', maxWidth: 64, width: '100%' }}>
            <QRCode
              className="qrcode-temp"
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={`${certificateData.name} ${certificateData.department} ${certificateData.event}`}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div className="signature-temp">
            <p className="date-temp">Date: {certificateData.date} </p>
          </div>
          <label htmlFor="certificate-id">Certificate ID: 98765567890</label>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <button  className='btn btn-primary' onClick={downloadpdf}>Download</button>
        </div>
      
      </>
    );
  } else if (Number(login_check_value) === 2) {
    return (
      <>
        <div className="outer-border mt-2" ref={pdfref}>
          <div className="">
            <span className="certification">Certificate of Completion</span>
            <br /><br />
            <span className="certify"><i>This is to certify that</i></span>
            <br /><br />
            <span className="mr "><h2 className="green">{certificateData.name} </h2> from <b className="department kk">{certificateData.department}</b></span>
            <br />
            <span className="certify"><i>has successfully completed the certification</i></span>
            <br /><br />
            <span className="fs-30 event">{certificateData.event}</span>
            <br /><br />
            <span className="fs-20">with score of <b>A+</b></span>
            <br /><br /><br /><br />
            <span className="certify"><i>dated</i></span>
            <br />
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
              <QRCode
                className='qrcode qrcode-temp'
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={`${certificateData.name} ${certificateData.department} ${certificateData.event}`}
                viewBox={`0 0 256 256`}
              />
            </div>
            <span className="fs-30 date-temp">{certificateData.date}</span>
          </div>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
        <button  className='btn btn-primary' onClick={downloadpdf}>Download</button>
        </div>
  
      </>
    );
  }
};

export default Download;
