import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'

function Navx() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="#" className='border p-1 border rounded-circle'>SM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#expertise">Expertise</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navx