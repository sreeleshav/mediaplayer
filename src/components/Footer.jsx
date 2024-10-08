import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className='container-fluid p-5 bg-info mt-5'>
      <Row>
      <Col>
       <h3>MediaPlayer 2024</h3>
       <p style={{textAlign:'justify', color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam perferendis nemo harum at nobis eligendi dignissimos blanditiis quia facere excepturi? Perferendis repellendus neque distinctio tenetur velit suscipit voluptate, debitis architecto.</p>
      </Col>
      <Col>
       <h3>Links</h3>
       <div className='d-flex flex-column'>
        <Link to={'/'} style={{color:'black'}}>Landing</Link>
        <Link to={'/dash'} style={{color:'black'}}>Dashboard</Link>
        <Link to={'/his'} style={{color:'black'}}>Watch History</Link>
       </div>
      </Col>
      <Col>
        <h3>Contact US</h3>
        <p className='my-4'>mediaplayer2024@gmail.com</p>
        <textarea name="" className='form-control' id=""></textarea>
        <button className='btn btn-success mt-2'>Send</button>
      </Col>
      </Row>
      <h4 className='text-center'>MediaPlayer&copy;all rights reserved</h4>
     </div>
    </>
  )
}

export default Footer