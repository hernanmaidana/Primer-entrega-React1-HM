import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"


const NavBarExample = () => {
    return(
       <>    
       <Navbar className="bg-warning text-dark p-3"  expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >Arte wow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav nav-margins">
            <Nav className="mx-auto parent">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/about">Productos</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>  
                     
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample