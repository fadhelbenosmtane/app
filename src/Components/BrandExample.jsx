import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpeg'
function BrandExample() {
  return (
    <>
      <Navbar bg="white">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="68"
              height="39"
              Left='73'
              Top='50'
              border-Radius='30'
              className="d-inline-block align-top "
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;