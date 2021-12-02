import React, { useState } from "react";
import "./Conference.css";

const AddConference = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className='conference-container'>
      <div className='bloc-tabs'>
        <button
          className={
            toggleState === 1
              ? "conference-tabs conference-active-tabs"
              : "conference-tabs"
          }
          onClick={() => toggleTab(1)}>
          <h6>Title</h6>
        </button>
        <button
          className={
            toggleState === 2
              ? "conference-tabs conference-active-tabs"
              : "conference-tabs"
          }
          onClick={() => toggleTab(2)}>
          <h6>Conference Details</h6>
        </button>
        <button
          className={
            toggleState === 3
              ? "conference-tabs conference-active-tabs"
              : "conference-tabs"
          }
          onClick={() => toggleTab(3)}>
          <h6>Contact details</h6>
        </button>
        <button
          className={
            toggleState === 4
              ? "conference-tabs conference-active-tabs"
              : "conference-tabs"
          }
          onClick={() => toggleTab(4)}>
          <h6> Important Details</h6>
        </button>
        <button
          className={
            toggleState === 5
              ? "conference-tabs conference-active-tabs"
              : "conference-tabs"
          }
          onClick={() => toggleTab(5)}>
          <h6>Content/Meta Data</h6>
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          {/* <h2>Content 1</h2> */}
          {/* <hr /> */}
          <div className='content-container'>
            <div className='conference'>
              <div className='conference-combo'>
                <label>Conference Title</label>
                <input type='text' placeholder='' />
              </div>
              <div className='conference-combo'>
                <label>Conference Type</label>
                <input type='text' placeholder='' />
              </div>
              <div className='conference-combo'>
                <label>Short Name</label>
                <input type='text' placeholder='' />
              </div>
              <div className='conference-combo'>
                <label>URL</label>
                <input type='text' placeholder='' />
              </div>
              <div className='conference-combo'>
                <label>Conference Date</label>
                <input type='date' placeholder='' />
                To
                <input type='date' placeholder='' />
              </div>
              <div className='conference-combo'>
                <button className='clear'>Clear</button>
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className='content-container'>
            <div className='content-combo'>
              <div>BETWEEN</div>
              <div>Sep 2nd, 2021</div>
            </div>
            <div className='content-combo'>
              <div>AND</div>
              <div>Dec 2nd, 2021</div>
            </div>
            <div className='content-combo'>
              <button className='search'>Search</button>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
          <div className='content-container'>
            <div className='content-combo'>
              <div>BETWEEN</div>
              <div>Nov 2nd, 2021</div>
            </div>
            <div className='content-combo'>
              <div>AND</div>
              <div>Dec 2nd, 2021</div>
            </div>
            <div className='content-combo'>
              <button className='search'>Search</button>
            </div>
          </div>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}>
          <div className='content-container'>
            <div className='content-combo'>
              <div>BETWEEN</div>
              <div>Dec 1st, 2021</div>
            </div>
            <div className='content-combo'>
              <div>AND</div>
              <div>Dec 1st, 2021</div>
            </div>
            <div className='content-combo'>
              <button className='search'>Search</button>
            </div>
          </div>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}>
          <div className='content-container'>
            <div className='content-combo'>
              <div>BETWEEN</div>
              <div>Nov 25th, 2021</div>
            </div>
            <div className='content-combo'>
              <div>AND</div>
              <div>Dec 2nd, 2021</div>
            </div>
            <div className='content-combo'>
              <button className='search'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddConference;
