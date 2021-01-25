import React from 'react';
import {
  Button,
  Container
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  return (
    <footer className="footer-1 bg-light text-dark">
      <Container>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      	<div className="links">
      		<ul className="footer-menu list-unstyled d-flex flex-row text-center text-md-left">
      			<li><a href="/our-story">About</a></li>
      			<li><a href="/blog">Blog</a></li>
      			<li><a href="/shop">Shop</a></li>
      			<li><a href="/contact">Contact</a></li>
      			<li><a href="/terms">Terms</a></li>
      			<li><a href="/privacy">Privacy</a></li>
      		</ul>
      	</div>
      	<div className="social mt-4 mt-md-0">
          <Button color="primary" outline className="twitter btn-icon" href="https://twitter.com/bootstrapbay" target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <span className="sr-only">View our Twitter Profile</span>
          </Button>
          {" "}
          <Button color="primary" outline className="facebook btn-icon" href="https://www.facebook.com/bootstrapbayofficial/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} /> {" "}
            <span className="sr-only">View our Facebook Profile</span>
          </Button>
          {" "}
          <Button color="primary" outline className="instagram btn-icon" href="https://github.com/bootstrapbay" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <span className="sr-only">View our Instagram Profile</span>
          </Button>
        </div>
      </div>
      <div className="copyright text-center">
      	<hr />
      	<p className="small">&copy; 2019, made with
          <span className="text-danger">
            {" "}<FontAwesomeIcon icon="heart" />{" "}
          </span>
          by BootstrapBay
        </p>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
