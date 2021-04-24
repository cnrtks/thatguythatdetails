import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class PricingGraph extends React.Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th />
            <th />
            <th>Interior Only</th>
            <th>Exterior Only</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>Basic</th>
          <td>${this.props.basic}</td>
          <td>${this.props.basicInterior}</td>
          <td>${this.props.basicExterior}</td>
        </tr>
        <tr>
          <th>Plus</th>
          <td>${this.props.plus}</td>
          <td>${this.props.plusInterior}</td>
          <td>${this.props.plusExterior}</td>
        </tr>
        <tr>
          <th>Extreme</th>
          <td>${this.props.extreme}</td>
          <td>${this.props.extremeInterior}</td>
          <td>${this.props.extremeExterior}</td>
        </tr>
        </tbody>
      </Table>
    );
  }
}
export default PricingGraph;
