import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-square-youtube fa-beat-fade fa-xl" style={{color: "#1c0de7",}} /> 
           {' '}
            MEDIA PLAYER
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header