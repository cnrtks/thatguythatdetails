import React, { Component } from "react";
import PricingGraph from "./PricingGraph";
import { Tabs, Tab } from "react-bootstrap";
class Pricing extends React.Component {
  render() {
    return (
      <div>
        <h1>Pricing</h1>
        <Tabs>
          <Tab eventKey="sedan" title="Sedan/Hatchhback">
            <PricingGraph
              basic={90}
              basicInterior={50}
              basicExterior={45}
              plus={110}
              plusInterior={70}
              plusExterior={55}
              extreme={145}
              extremeInterior={85}
              extremeExterior={75}
            />
          </Tab>
          <Tab eventKey="suv" title="SUV">
            <PricingGraph
              basic={100}
              basicInterior={55}
              basicExterior={50}
              plus={120}
              plusInterior={80}
              plusExterior={60}
              extreme={165}
              extremeInterior={95}
              extremeExterior={85}
            />
          </Tab>
          <Tab eventKey="van" title="Minivan/Pickup">
            <PricingGraph
              basic={110}
              basicInterior={60}
              basicExterior={55}
              plus={130}
              plusInterior={90}
              plusExterior={65}
              extreme={180}
              extremeInterior={105}
              extremeExterior={95}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Pricing;
