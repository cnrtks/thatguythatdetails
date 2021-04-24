import React from "react";
import Addons from "./Addons";
import { Carousel } from "react-bootstrap";

class BaA extends React.Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src="https://thatguythatdetails.com/assets/01.webp"
            alt="Footwell"
            width="100%"
            height="50%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src="https://thatguythatdetails.com/assets/08.webp"
            alt="Floot mats"
            width="100%"
            height="50%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src="https://thatguythatdetails.com/assets/09.webp"
            alt="Back seat"
            width="100%"
            height="50%"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default BaA;
