import React from 'react';
import {
  Button
} from "reactstrap";
import HeartEyesEmoji from "./../../assets/img/gifs/hearteyes.gif";

const PCTA = (props) => {
  return (
    <div className="download bg-primary text-center text-white">
      <div className="emoji mb-3">
      	<img src={HeartEyesEmoji} width="50" alt="HeartEmoji"/>
      </div>
      <h1 className="text-white">Request a Free Sample!</h1>
      <p className="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. <br /> Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <Button href="#" color="white" size="lg" className="mt-4">
        Get Your Sample
      </Button>
    </div>
  );
};

export default PCTA;
