import React, { useState } from 'react'
import "./home.css"
import Footer from '../footer/Footer'
import * as XLSX from "xlsx"
import { useSelector } from 'react-redux'
import ExcelsheetData from '../excesheet/ExcelsheetData'
import Swal from 'sweetalert2'
const Home = () => {

  const value= useSelector((state) => state.counter.value);


  const count = useSelector((state) => state.counter.data)


  const [toggle,settoggle]=useState(false)
const handleclick=(e)=>
  {
    if(value){settoggle(!toggle)}

    else
    {
      Swal.fire("Kindly Please Login First");
    }
  }
  


  return (
    <>
    <main className='main_home_page'>
      <div className="main_home_left_side">
     
        <div class="content">
            <h2 className='heading_h2'>Automatic Certificate Generator With QR Code</h2>
        
            <button class="button" onClick={handleclick} >Upload the Files.</button>
            {toggle?<ExcelsheetData/>:""}
        </div>
      

      </div>
      <div className="main_home_right_side">
      
      </div>
      
    




      
    </main>
     <Footer/>
    </>
  )
}

export default Home