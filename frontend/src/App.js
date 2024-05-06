import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tr from './tr1.png'; // Updated import path
import time from './time.jpeg';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div>
    <Navbar expand="lg" className="">
      <Container>
        <img style={{ width: 40 }} src={tr} alt="Logo" />
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-danger">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link className='' href="#link">Reservation</Nav.Link>
            <Nav.Link href="#link">Destination</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link  as ={Link} to={'/PaymentForm'}>Payment</Nav.Link>
          </Nav>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" style={{marginLeft:-9,bottomRight:'none'}}>Search</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <img style={{width:'100%' ,height:500,marginTop:20}} src={time} alt="" />
    <div style={{position:'absolute',marginTop:-300 ,marginLeft:520 ,color:'white', fontSize:50}}>
       <h2 className=''>Let's The world Toghather</h2>
       <p style={{marginLeft:-18}}>Find Awesome Vol</p>
    </div>
    </div>
    
  );
}

export default App;

