import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import BrandExample from './BrandExample';
import SearchBar from './search';
import './Nav-css.css'
const NavBar = () => {
  return (
          <Navbar className="container d-flex" variant="white">
            <Container>
            <BrandExample ></BrandExample>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="text-dark text-md " >
                  <Nav.Link className="text-dark" href="/" >Accueil</Nav.Link>
                  <Nav.Link className="text-dark" href="/Comparer">Comparer</Nav.Link>
                  <Nav.Link className="text-dark" href="/Qui sommes nous">Qui sommes nous</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <SearchBar></SearchBar>
            </Container>
            
          </Navbar>  

  );
}

export default NavBar;
