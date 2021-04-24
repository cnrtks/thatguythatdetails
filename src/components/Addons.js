import React from "react";
import { Nav, Col, Row, Tabs, Tab } from "react-bootstrap";
import StageCorrection from "./StageCorrection";

class Addons extends React.Component {
  render() {
    return (
      <div style={{maxWidth: "90%"}}>
        <h2>Add Ons & Extras</h2>
        <h3>Extreme Exterior (Purchase Required)</h3>
        <hr/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="stage1">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="stage1">
                    1 Stage Correction
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="stage2">
                    2 Stage Correction
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="stage3">
                    3 Stage Correction
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="stage1">
                  <StageCorrection sedan={45} suv={55} van={65} desc="Minor"/>
                </Tab.Pane>
                <Tab.Pane eventKey="stage2">
                  <StageCorrection sedan={65} suv={75} van={85} desc="Medium" />
                </Tab.Pane>
                <Tab.Pane eventKey="stage3">
                  <StageCorrection sedan={85} suv={95} van={105} desc="Major" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
export default Addons;
