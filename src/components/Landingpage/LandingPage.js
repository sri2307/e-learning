import React from "react";
import classes from "./LandingPage.module.css";
import Homepage from "../Homepage/Homepage";

import CustomTabs from "../Utils/CustomTabs";
import CustomeTables from "../Utils/CustomeTables";
import CustomCard from "../Utils/CustomCard";
import { Col, Row } from "reactstrap";
import Tabs from "../Utils/Tabs/Tabs";

const LandingPage = () => {
  return (
    <>
      <div className={classes.container}>
        <Tabs />
        {/* <div className={classes.container}> */}
        <div className={classes.customcard}>
          <Row>
            <Col sm='4'>
              <CustomCard title='Active Conference' count='8' color='#4fcef0' />
            </Col>
            <Col sm='4'>
              <CustomCard title='Users' count='26' color='#71c152' />
            </Col>
            <Col sm='4'>
              <CustomCard title='Registrations' count='26' color='#fc9134' />
            </Col>
          </Row>
          {/* </div> */}
        </div>
        <div className={classes.table}>
          <CustomeTables />
        </div>

        <div className={classes.table}>
          <h4>Registrations By Conferences</h4>
          <CustomeTables />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
