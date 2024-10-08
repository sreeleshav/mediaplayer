import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategoryApi } from '../services/allApi';
import CategorySet from './CategorySet';
import { getCategoryApi } from '../services/allApi';

function Catagory() {
  const [show, setShow] = useState(false);

  const [cat,setcat]=useState("")
  const [resp,setResp]=useState({})

  const handleCategory=async()=>{
    if(!cat){
      toast.warning("Enter Valid Input!!")
    }
    else{
      const result=await addCategoryApi({category:cat,videos:[]})
      if(result.status==201){
        toast.success("category Added!!")
        setcat("")
        handleClose()
        setResp(result)
      }
      else{
        toast.error("adding Failed!!")
        console,log(result)
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <div className='d-grid'>
      <button className='btn btn-success' onClick={handleShow}>Add Category</button>
     </div>

     
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
         <FloatingLabel controlId="floatingtitle"label="Category Name" className="mb-3">
        <Form.Control type="text" onChange={(e)=>{setcat(e.target.value)}} placeholder="name@example.com" />
      </FloatingLabel>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <CategorySet res={resp}/>
      
    </>
  )
}

export default Catagory