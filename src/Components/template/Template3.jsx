import React from 'react'
import "./teamplate2.css"
import QRCode from "react-qr-code";
import { useSelector } from 'react-redux';
import Logo from "../template/Logo.png"
const Template2 = () => {

    const excel_data=useSelector((state) => state.counter.data) // 52 datas
    const fin=excel_data[0];
    function yyyymmdd() {
        var x = new Date();
        var y = x.getFullYear().toString();
        var m = (x.getMonth() + 1).toString();
        var d = x.getDate().toString();
        (d.length == 1) && (d = '0' + d);
        (m.length == 1) && (m = '0' + m);
        var yyyymmdd = y +"-"+ m+"-" + d;
        return yyyymmdd;
    }
    let dates=yyyymmdd();
  return (
    <>
<div className="outer-border">
<div className="inner-dotted-border">

<div className='logo'>
<img src={Logo}/>
</div>
       <span className="certification">Certificate of Completion</span>
       <br/><br/>
       <span className="certify"><i>This is to certify that</i></span>
       <br/><br/>

       <span className="name"><b>{fin.Student}</b></span><br/><br/>
       <span className="certify"><i>has successfully completed the certification</i></span> <br/><br/>
       <span className="fs-30">{fin.Event}</span> <br/><br/>
       <span className="fs-20">with score of <b>A+</b></span> <br/><br/><br/><br/>
       <span className="certify"><i>{fin.dates}</i></span><br/>
       <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
       <QRCode
       className='qrcode'
       size={256}
       style={{ height: "auto", maxWidth: "100%", width: "100%" }}
       value={`${fin.Student} + ${fin.Event}`}
       viewBox={`0 0 256 256`}
       />
   </div>
      <span className="fs-30 date">{dates}</span>

</div>
</div>

    </>
  )
}

export default Template2