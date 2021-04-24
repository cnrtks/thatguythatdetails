import { Facebook, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Interior from "./components/Interior";
import Exterior from "./components/Exterior";
import Addons from "./components/Addons";
import BaA from "./components/BaA";

function App() {
  return (
    <div className="App" id="home">
      <Navigation />
      <Header />
      <div id="services" className="pt-5">
        <div className="my-5">
          <Services />
          <hr />
        </div>
        <div className="py-5">
          <Interior />
        </div>
        <Exterior />
      </div>
      <div id="pricing" className="py-3 my-3">
        <Pricing />
        <hr />
        <div id="addonsDiv" className="my-1 py-3">
          <Addons />
        </div>
      </div>
      <div id="gallery">
        <BaA />
      </div>
      <footer id="contact" className="App-footer p-4">
        <Container>
          <Row>
            <Col>
              <p>
                We pride ourselves on quality work and clear, upfront pricing.
                Please don’t hesitate to contact us if you have any questions.
              </p>
              <p className="p-2">Thank you for your business</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={
                  <Popover id="popover-phone">
                    <Popover.Title as="h3">Call or Text</Popover.Title>
                    <Popover.Content>437-929-1116</Popover.Content>
                  </Popover>
                }
              >
                <a href="tel:+14379291116">
                  <TelephoneFill size="4em" />
                </a>
              </OverlayTrigger>
            </Col>
            <Col>
            <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={
                  <Popover id="popover-phone">
                    <Popover.Content>Visit Us on Facebook</Popover.Content>
                  </Popover>
                }
              >
              <a href="http://www.facebook.com/thatguythatdetails">
                <Facebook size="4em" />
              </a>
              </OverlayTrigger>
            </Col>
            <Col>
            <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={
                  <Popover id="popover-phone">
                    <Popover.Title as="h3">Email</Popover.Title>
                    <Popover.Content>thatguythatdetails@outlook.com</Popover.Content>
                  </Popover>
                }
              >
              <a href="mailto:thatguythatdetails@outlook.com">
                <EnvelopeFill size="4em" />
              </a>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="orange pt-5">Halton / Hamilton / Brant / Niagara</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
