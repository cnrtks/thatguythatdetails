import React from "react";
import Table from "react-bootstrap/Table";
import { CheckCircleFill } from "react-bootstrap-icons";

class Interior extends React.Component {
  render() {
    return (
      <div>
        <h2>Interior</h2>
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
              <td>Full Interior Vacuum</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Deep Clean</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Surface Wipe Down</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Interior Trim/Surface Protectant</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Leather Surface Brush and Clean</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Mat Cleaning</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Window Cleaning</td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Interior Trim/Surface Protectant</td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Leather Conditioner</td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Heavy Stage Shampoo (Carpet, Seats, Salt, Stains)</td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
            <tr>
              <td>Heavy Pet Hair Removal</td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="false" aria-extended="false">
                &#x2610;
              </td>
              <td class="true" aria-extended="true">
                <CheckCircleFill fill="#ff5e00"/>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Interior;
