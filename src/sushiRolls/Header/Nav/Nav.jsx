// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// function NavBar() {
//   return (
//     <>
//     {[false, "sm"].map((expand) => (
//         <Navbar key={expand} expand={expand} className="mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#"></Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Навигация
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link to="/" className="navItem nav__link">
//                     Главная
//                   </Nav.Link>
//                   <Nav.Link to="/rolls" className="navItem nav__link">
//                     Роллы
//                   </Nav.Link>
//                   <Nav.Link to="/gunkans" className="navItem nav__link">
//                     Гунканы
//                   </Nav.Link>
//                   <Nav.Link to="/sushi" className="navItem nav__link">
//                     Суши
//                   </Nav.Link>
//                   <Nav.Link to="/sets" className="navItem nav__link">
//                     Сэты
//                   </Nav.Link>
//                   <Nav.Link to="/sause" className="navItem nav__link">
//                     Соусы
//                   </Nav.Link>

//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//       {/* {["sm"].map((expand) => (
//         <Navbar key={expand} expand={expand} >
//           <Container fluid >
//             <Navbar.Brand href="#"></Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Навигация
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 mx-auto">
//                   <NavLink to="/" className="navItem nav__link">
//                     Главная
//                   </NavLink>
//                   <NavLink to="/rolls" className="navItem nav__link">
//                     Роллы
//                   </NavLink>
//                   <NavLink to="/gunkans" className="navItem nav__link">
//                     Гунканы
//                   </NavLink>
//                   <NavLink to="/sushi" className="navItem nav__link">
//                     Суши
//                   </NavLink>
//                   <NavLink to="/sets" className="navItem nav__link">
//                     Сэты
//                   </NavLink>
//                   <NavLink to="/sause" className="navItem nav__link">
//                     Соусы
//                   </NavLink>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))} */}
//     </>
//   );
// }

// export default NavBar;

import { NavLink } from "react-router-dom";
import "./Nav.style.css";
const NavigationBar = () => {
  return (
    <>
      <div class="container flex header__container">
        <input id="burger" type="checkbox" />
        <label for="burger"></label>
        <div class="menu">
            <NavLink to="/" className="navItem nav__link">
              Главная
            </NavLink>
            <NavLink to="/rolls" className="navItem nav__link">
              Роллы
            </NavLink>
            <NavLink to="/gunkans" className="navItem nav__link">
              Гунканы
            </NavLink>
            <NavLink to="/sushi" className="navItem nav__link">
              Суши
            </NavLink>
            <NavLink to="/sets" className="navItem nav__link">
              Сэты
            </NavLink>
            <NavLink to="/sause" className="navItem nav__link">
              Соусы
            </NavLink>
        </div>
        <nav >
            <NavLink to="/" className="navItem nav__link">
              Главная
            </NavLink>
            <NavLink to="/rolls" className="navItem nav__link">
              Роллы
            </NavLink>
            <NavLink to="/gunkans" className="navItem nav__link">
              Гунканы
            </NavLink>
            <NavLink to="/sushi" className="navItem nav__link">
              Суши
            </NavLink>
            <NavLink to="/sets" className="navItem nav__link">
              Сэты
            </NavLink>
            <NavLink to="/sause" className="navItem nav__link">
              Соусы
            </NavLink>
          </nav>
      </div>
    </>
  );
};

export default NavigationBar;
