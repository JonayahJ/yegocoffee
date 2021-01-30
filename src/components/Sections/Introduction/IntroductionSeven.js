import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

import Button from "../../Control/Button";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import Quantity from "../../../components/Control/Quantity";

export default function IntroductionSeven({ data }) {
  const [currentAccordionIndex, setCurrentAccordionIndex] = useState(1);
  const [quantity, setQuantity] = useState();
  return (
    <div className="introduction-seven">
      <div className="introduction-seven__wrapper -top">
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6">
                <div className="introduction-seven__wrapper__content__detail">
                  <h5>Roasts</h5>
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    Dark Roasted Coffee
                  </SectionTitleOne>
                  <h3>from $15</h3>
                  <p>
                  This dense mountain coffee produces the most aromatic dark roast profile.  Roasted in small batches on well-controlled temperatures, this roast creates a hint of sweet citrus taste within the bitter taste of a dark roast.{" "}
                  </p>
                  <Button
                    action={process.env.PUBLIC_URL + "#"}
                    color="dark"
                    content="More info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionSeven/1.png"
            }
            alt="Dark roasted coffee packaging"
          />
        </div>
      </div>
      <div className="introduction-seven__wrapper -bottom">
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionSeven/2.png"
            }
            alt="Green coffee sample"
          />
        </div>
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6 ml-auto">
                <div className="introduction-seven__wrapper__content__detail">
                  <h5>Green</h5>
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    Try Our Green Coffee
                  </SectionTitleOne>
                  <h3>free sample</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <Button
                    action={process.env.PUBLIC_URL + "#"}
                    color="dark"
                    content="More info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
