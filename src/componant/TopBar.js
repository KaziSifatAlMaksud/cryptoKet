import './TopBar.css'
import './button.css'
import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form,FormControl, Button} from 'react-bootstrap'

const TopBar = () => {
  return <div>
  <Navbar bg="dark" variant='dark' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className ="text-white" >CryptoKet</Navbar.Brand>
    <Form className="searchbar">
        <FormControl
          type="search"
          placeholder="Search Item Here "
          className="searchbar"
          aria-label="Search"
        />
        
      </Form>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Explore</Nav.Link>
        <Nav.Link href="#action2">My Items</Nav.Link>
        <Nav.Link href="#action3">Following</Nav.Link>        
        <Button className='button-1' variant="outline-success">Create</Button>
        <Button className='button-2' variant="outline-success">Connect</Button>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
}

export default TopBar