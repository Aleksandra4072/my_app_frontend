import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
  } from 'react-bootstrap';

  import styles from './Header.module.css';

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.headerContainer}>
        <Container>
          <Navbar.Brand className={styles.brand} href="#">
            My App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className={styles.menuTitle}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className={styles.menuItem} href="#weather">
                  Weather
                </Nav.Link>
                <Nav.Link className={styles.menuItem} href="#posts">
                  Posts
                </Nav.Link>
                <NavDropdown title="My Lybrary" className={styles.menuItem} >
                  <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Authors</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Characters
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Statistics
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
}