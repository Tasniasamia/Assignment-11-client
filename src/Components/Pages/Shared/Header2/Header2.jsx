import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header2.css';
import { useContext } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { authdata } from '../Authprovider/Authprovider';
function BasicExample() {
    const receivedata=useContext(authdata);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><Link to="/"style={{color:"brown",fontSize:"35px",fontWeight:"bold"}}className='text-decoration-none'> <i className="fa-solid fa-car-side"style={{color:"hotpink"}}></i><span style={{color:"skyblue"}}>Toy</span><span style={{color:"hotpink"}}>Man</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"id="navbar2">
          <ActiveLink to="/" style={{color:"hotpink"}}>Home</ActiveLink>
              <ActiveLink to="/alltoy" style={{color:"hotpink"}}>All Toys</ActiveLink>
          {receivedata?.user && <ActiveLink to="/mytoy" style={{color:"hotpink"}}>My Toys</ActiveLink>}    
          {receivedata?.user &&              <ActiveLink to="/addtoy" style={{color:"hotpink"}}>Add Toys</ActiveLink>
}    
              <ActiveLink to="/blog" style={{color:"hotpink"}}>Blog</ActiveLink>
           
          </Nav>
          <Nav >
            <div className='d-flex justify-content-center align-items-center mx-auto'>
            <div>
            {
                receivedata.user && <img src={receivedata.user.photoURL} alt="profile_imag"className='rounded-circle me-2'style={{height:"40px",width:"40px"}}data-toggle="tooltip" data-placement="top" title={receivedata.user.displayName}/>
            }</div>
            <div>
         
          {
            receivedata.user?<button className='btn text-white'style={{background:"hotpink"}}onClick={receivedata.signout}> Logout</button>: <button className='btn 'style={{background:"hotpink"}}><Link to="/Login"className='text-decoration-none text-white'> Login</Link></button>
          }
        </div></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;