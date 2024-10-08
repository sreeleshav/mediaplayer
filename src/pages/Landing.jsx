import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
     <div className='container-fluid p-5'>
       <Row>
         <Col className='d-flex flex-column justify-content-center'>
          <h1>MediaPlayer</h1>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusantium veniam magni atque voluptates rerum pariatur laboriosam in vitae, ipsa, molestias quod officia provident porro iure tempore numquam? Nisi, dolores?</p>
          <div className='d-grid'>
            <Link to={'/dash'} className='btn btn-success'>Let's Go</Link>
          </div>
         </Col>
         <Col>
          <img src="https://niceillustrations.com/wp-content/uploads/2020/12/Youtube-Studio-color-800px-768x768.png"  className='img-fluid' alt="landing"/>
         </Col>
       </Row>
     </div>
     <div className='container-fluid p-5 mt-3'>
      <h4 className='text-center mb-3'>Features</h4>
      <div className='row justify-content-around'> 

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/2105902/screenshots/10857439/animated-icon_1.gif" />
      <Card.Body>
        <Card.Title>Simple Upload</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://media.giphy.com/media/hXO9K51TTuzEjHyzr8/giphy.gif" />
      <Card.Body>
        <Card.Title>Watch Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/13/f2/a9/13f2a9032b0d9c76da2c27af64d3809b.gif" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
     </div>
     <div className='p-5 container-fluid'>
        <Row>
           <Col md={8}>
             <h4>Simple And Faster</h4>
             <p style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
           </Col>
           <Col md={4}>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rh3tobg7hEo?si=oaw9x_cGi2yexUMb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </Col>
        </Row>
     </div>
    </>
  )
}

export default Landing