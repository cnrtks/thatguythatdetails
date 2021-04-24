import React from "react";
import Table from "react-bootstrap/Table";
import { CheckCircleFill } from "react-bootstrap-icons";

class Exterior extends React.Component {
  render() {
    return (
      <div>
        <h2>Exterior</h2>
        <Table>
          <thead>
            <tr>
              <th />
              <th>Basic</th>
              <th>Plus</th>
              <th>Extreme</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Body Hand Wash and Shampoo</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Door Jam Cleaning</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Wheel Cleaning</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Tire Cleaning</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Tire Dressing</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Window Cleaning Interior and Exterior</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Undercarriage Wash</td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Clay Treatment and Full Decontamination</td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
            <tr>
              <td>Wax/Sealant Application</td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Exterior;
