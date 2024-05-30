import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as xlsx from "xlsx";
import { set_all_array_data } from '../LoginCheck'
const ExcelsheetData = () => {
// ok
    const dispatch=useDispatch();
    const [data,setdata]=useState([])

    const handle=async (e)=>
        {
          const file=e.target.files[0]
          const data=await file.arrayBuffer(file);
          const excelfile=xlsx.read(data);
          const excelsheet=excelfile.Sheets[excelfile.SheetNames[0]];
          const exceljson=xlsx.utils.sheet_to_json(excelsheet)
         
          setdata(exceljson)
          dispatch(set_all_array_data(exceljson))
          console.log("hii",exceljson)

        }
  return (
    <>
    <input type='file' className='file' onChange={handle}/>

    
    </>
  )
}

export default ExcelsheetData