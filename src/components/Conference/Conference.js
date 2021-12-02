import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../Utils/CustomeTables";

const Conference = () => {
  return (
    <>
      <div className='conference-main'>
        <div className='add-conference'>
          <Link to='./add-conference'>+ Add Conference</Link>
        </div>
        <div className='conference-table'>
          <div className='table'>
            <CustomTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Conference;
