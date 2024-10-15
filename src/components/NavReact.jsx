import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
const NavReact = () => {
  return (
    <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto me-3">
          
              <Nav.Link className="me-3 mb-3" style={{ color: 'red', marginBottom: '10px', pading:'10px'}}  href="#home">Home</Nav.Link>
                  
              <Nav.Link className="me-3 mb-3" style={{ color: 'red', marginBottom: '10px'}} href="#link">Link</Nav.Link>
              
            <NavDropdown title="Info Drop 1" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/">Action drop1</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Info Drop 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default NavReact