import React from "react";
import { Table } from "reactstrap";
import "./CustomTables.css";

const CustomeTables = () => {
  return (
    <Table responsive hover bordered>
      <thead>
        <tr>
          <th>S No</th>
          <th>Country</th>
          <th>Total Conferences</th>
          <th>Active Conferences</th>
          <th>Total Registrations</th>
          <th>Active Registrations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Canada</td>
          <td>20</td>
          <td>20</td>
          <td>15</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>India</td>
          <td>20</td>
          <td>20</td>
          <td>15</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>UK</td>
          <td>20</td>
          <td>20</td>
          <td>15</td>
          <td>10</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomeTables;
