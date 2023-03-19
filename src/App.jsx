import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';



function App() {
  return (
  <div className="container">
  <NavBar />
  <div class="container row ">
    <div class="col"><h1>Column</h1></div>
    <div class="col"><h1>Column</h1></div>
    <div class="col"><h1>Column</h1></div>
    <div class="col"><h1>Column</h1></div>
  </div>
   </div>
  );
}
export default App
