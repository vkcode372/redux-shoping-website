import React, { useState } from 'react'
import { Container, Navbar,Nav,Form,Button,NavDropdown} from 'react-bootstrap'
import { Link ,useNavigate} from 'react-router-dom'
import  "./Header.css"
import { useSelector } from 'react-redux'


const Header = () => {
  const cart=useSelector((state)=>state.Cart.cart);
  const navigater=useNavigate();
  const categories=useSelector((state)=>state.category.categories)

  const [searchTerms,setsearchTerms]=useState('');

  const handelSubmit=(e)=>{
    e.preventDefault();
    if(searchTerms!==""){
      setsearchTerms("");
    navigater(`/search/${searchTerms.trim()}`)
    }else{
      alert("Please Enter Product name")
    }
  }
  return (
 <>
    <Navbar expand="lg" bg="primary-color py-4">
      <Container>
        <Navbar.Brand className='navlink'><Link to="/">FreshFinds</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{gap:"10px"}}>
        <NavDropdown title="Category"  className="me-auto category-css"id="basic-nav-dropdown ">
           {
            categories.map((category,index)=>
              (
               
                  <Link key={index} className="dropdown-item" to={`/products/${category}`}>{category}</Link>
              )
            )
           }
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          <Form className="d-flex" onSubmit={handelSubmit}>
            <Form.Control
              type="search"
              placeholder='Search'
              className="me-2"
              aria-label="Search"
              value={searchTerms}
             onChange={(e)=>setsearchTerms(e.target.value)}
            />
            <Button variant="outline-success"  type='submit'>Search</Button>
          </Form>
          <Nav className="navlink ">
            <Link to="/cart" className='position1'>
              
            <span className="">
  <i className="fa-solid fa-cart-shopping"></i>
  {
    cart.length>0?( <span className="headerbadge blue">{cart.length}</span>):""
  }
 
</span>
            
            </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </>
  )
}

export default Header