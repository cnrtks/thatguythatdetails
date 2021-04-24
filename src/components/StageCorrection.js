import React from "react";

class StageCorrection extends React.Component {
  render() {
      const pStyle = {textAlign: "left"}
    return (
      <div style={pStyle}>
        <h4>{this.props.desc} Swirl and Scratch Removal</h4>
          <p>${this.props.sedan} - Sedan/Hatchback</p>
          <p>${this.props.suv} - SUV</p>
          <p>${this.props.van} - Minivan/Pickup Truck</p>
      </div>
    );
  }
}
export default StageCorrection;
