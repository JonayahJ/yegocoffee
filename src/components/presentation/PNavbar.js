import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  Link,
  NavLink
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/YegoCoffeeLogo_whitetrans.png';

class PNavbar extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle () {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar className="navbar-dark bg-tertiary" expand="lg">
            <Container>
              <NavLink to="/" className="navbar-brand">
                <img src={logo} alt="Yego Coffee logo" className="mr-2" height="90" />
              </NavLink>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                
                {/* Left Nav */}
                <Nav className="mx-2" navbar navbar-nav>
                  
                  {/* About Dropdown */}
                  <NavItem key="navitem-1">
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        About
                      </DropdownToggle>
                      <DropdownMenu>
                        <Link to="/about-francois">
                          <DropdownItem>About Francois</DropdownItem>
                        </Link>
                        <Link to="/coffee-changes-lives">
                          <DropdownItem>Coffee That Changes Lives</DropdownItem>
                        </Link>
                        <Link to="/our-story">
                          <DropdownItem>Our Story</DropdownItem>
                        </Link>
                        <Link to="/washing-stations">
                          <DropdownItem>Washing Stations</DropdownItem>
                        </Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>

                  {/* Links */}
                  <NavItem className="nav-link" href="/blog">Blog</NavItem>
                  <NavItem className="nav-link" href="/shop">Shop</NavItem>
                  <NavItem className="nav-link" href="/contact">Contact</NavItem>
                </Nav>
                
                {/* Right Nav */}
                <Nav className="ml-auto" navbar>
                  {/* Shopping Cart Button */}
                  <NavItem key="navitem-5">
                  <Button color="light" href="#">
                      <FontAwesomeIcon icon="shopping-cart" /> {" "}
                    </Button>
                  </NavItem>
                  
                  {/* Login Button */}
                  <NavItem className="mx-2">
                    <Button color="light" href="#">
                      <FontAwesomeIcon icon="user" /> {" "}
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
};

PNavbar.propTypes = {
  title: PropTypes.string
};

PNavbar.defaultProps = {
  title: "Lazy Kit"
};

export default PNavbar;
