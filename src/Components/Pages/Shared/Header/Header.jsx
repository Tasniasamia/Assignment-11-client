import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
   
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"className=''>
        <Container>
          <Navbar.Brand className=''><Link to="/"style={{color:"brown",fontSize:"35px",fontWeight:"bold"}}className='text-decoration-none'> <i className="fa-solid fa-car-side"style={{color:"hotpink"}}></i><span style={{color:"skyblue"}}>Toy</span><span style={{color:"hotpink"}}>Man</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"id="navbar2">
              <Link to="/" style={{color:"hotpink"}}>Home</Link>
              <Link to="/alltoy" style={{color:"hotpink"}}>All Toys</Link>
              <Link to="/" style={{color:"hotpink"}}>My Toys</Link>
              <Link to="/addtoy" style={{color:"hotpink"}}>Add Toys</Link>
              <Link to="/blog" style={{color:"hotpink"}}>Blog</Link>
           
  
            </Nav>
            <Nav >
              
           
          
        <button className='btn 'style={{background:"hotpink"}}><Link to="/login"className='text-decoration-none text-white'> Login</Link></button>
          
      
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;