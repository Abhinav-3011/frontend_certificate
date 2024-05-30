import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch,useSelector } from 'react-redux';
import {switch_template_function} from "../LoginCheck"
import "./template.css"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Template() {
  const [show, setShow] = useState(true);
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const value = useSelector((state) => state.counter.value)
   const data = useSelector((state) => state.counter.data)

   console.log(data)
  const handleClose = () => setShow(!show);

const go_to_download=(e)=>
  {
         console.log(e.target.id)
         const {id}=e.target;


         if(value &&data.length>0 )
          {
         if(id=="image1")
          {
            dispatch(switch_template_function(1))
          }

          else
          {
            dispatch(switch_template_function(2))
          }

          navigate("/download")

        }
        

        else
        {
          Swal.fire("Kindly Please Login and also upload the file");
        }
  }
  return (
    <>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={()=>navigate("/")}>
          <Modal.Title>Templates...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='image1' id="image1" onClick={go_to_download}></div>

        <div className='image2' id="image2" onClick={go_to_download}></div>
        
        
        
        
        
        
        
        
        
        
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Template;