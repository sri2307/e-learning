import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const CustomTabs = () => {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState("1");

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

  return (
    <div
      style={{
        display: "block",
        width: "48%",
        padding: 30,
        border: "1px solid #ccc",
      }}>
      <Nav
        tabs
        style={{
          fontWeight: "bold",
          color: "#1a507c",
          backgroundColor: "#eeeeee",
        }}>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "1",
              border: "1px solid black",
              fontWeight: "bold",
              color: "#1a507c",
              backgroundColor: "#eeeeee",
            })}
            onClick={() => {
              toggle("1");
            }}>
            <h6>Custom Period</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "2",
              border: "1px solid black",
            })}
            onClick={() => {
              toggle("2");
            }}>
            <h6>Last Quarter</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "3",
              border: "1px solid black",
            })}
            onClick={() => {
              toggle("3");
            }}>
            <h6>Last Month</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "4",
              border: "1px solid black",
            })}
            onClick={() => {
              toggle("4");
            }}>
            <h6>Last Fortnight</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "5",
              border: "1px solid black",
            })}
            onClick={() => {
              toggle("5");
            }}>
            <h6>Last Week</h6>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === "6",
              border: "1px solid black",
            })}
            onClick={() => {
              toggle("6");
            }}>
            <h6>Last 24 hours</h6>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent
        activeTab={currentActiveTab}
        style={{ background: "#eeeeee" }}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
              <h5>Sample Tab 1 Content</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
              <h5>Sample Tab 2 Content</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            <Col sm='12'>
              <h5>Sample Tab 3 Content</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='4'>
          <Row>
            <Col sm='12'>
              <h5>Sample Tab 4 Content</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='5'>
          <Row>
            <Col sm='12'>
              <h5>Sample Tab 5 Content</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='6'>
          <Row>
            <Col sm='12'>
              <h5>Sample Tab 6 Content</h5>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CustomTabs;
