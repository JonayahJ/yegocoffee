import React from "react";
import {
  Button,
  Col,
  Container,
  Row
} from "reactstrap";

import GreenBeans from "./../../assets/img/greencoffeebeans.jpg";

const ExampleHeader = (props) => (
  <div className="page-hero bg-tertiary text-white" id="banner">
		<div className="bubbles d-none d-md-block">

      <div className="bubble bubble-1 rotate-bubble bg-warning"></div>
      <div className="bubble bubble-2 bubble-bottom-right bg-danger rotate-bubble"></div>
      <div className="bubble bubble-3 bubble-top-right bg-warning rotate-bubble"></div>
      <div className="bubble bubble-4 bubble-top-left bg-info rotate-bubble"></div>
      <div className="bubble bubble-5 bg-info rotate-bubble"></div>
      <div className="bubble bubble-6 bubble-bottom-right bg-danger rotate-bubble"></div>
      <div className="bubble bubble-7 bubble-top-right bg-success rotate-bubble"></div>
      <div className="bubble bubble-8 bubble-top-left bg-success rotate-bubble"></div>
      <div className="bubble bubble-9 bg-warning rotate-bubble"></div>
      <div className="bubble bubble-10 bg-danger rotate-bubble"></div>
      <div className="bubble bubble-11 bubble-bottom-right bg-info rotate-bubble"></div>
      <div className="bubble bubble-12 bubble-top-right bg-success rotate-bubble"></div>
      <div className="bubble bubble-13 bubble-top-left bg-success rotate-bubble"></div>


      <div className="circle circle-1 bg-light rotate-circle"></div>
      <div className="circle circle-2 bg-success rotate-circle"></div>
      <div className="circle circle-3 bg-danger rotate-circle"></div>
      <div className="circle circle-4 bg-info rotate-circle"></div>
      <div className="circle circle-5 bg-success rotate-circle"></div>
      <div className="circle circle-6 bg-info rotate-circle"></div>
      <div className="circle circle-7 bg-warning rotate-circle"></div>
      <div className="circle circle-8 bg-white rotate-circle"></div>
      <div className="circle circle-9 bg-warning rotate-circle"></div>
      <div className="circle circle-10 bg-danger rotate-circle"></div>
		</div>
  	<Container>
      <Row>
        <Col xs="6" lg={{size: 4}} className="text-left">
          {/* Header Text */}
	          <div className="title">
	            <h1 className="display-2 text-white">GREEN COFFEE BEANS</h1>
	            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	          </div>
            
            {/* Header Button */}
            <Button color="secondary" size="lg" className="btn-pill" href="/shop">Shop</Button>{" "}
        </Col>

        <Col xs="6" lg={{size: 4, offset: 1}} className="text-left">
          {/* Header Image */}
          <img src={GreenBeans} alt="Green Coffee Beans" width="640" />
        </Col>
      </Row>
    </Container>
	</div>
);

export default ExampleHeader;
