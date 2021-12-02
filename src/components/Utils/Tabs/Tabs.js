import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          <h6>Custom Period</h6>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          <h6>Last Quarter</h6>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>
          <h6>Last Month</h6>
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}>
          <h6> Last Fortnight</h6>
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}>
          <h6>Last Week</h6>
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}>
          <h6>Last 24 hrs</h6>
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          {/* <h2>Content 1</h2> */}
          {/* <hr /> */}
          <div className='content-container'>
            <div className='content-combo'>
              <div>BETWEEN</div>
              {/* <div>Nov 16th, 2021</div> */}
              <input type='date' />
            </div>
            <div className='content-combo'>
              <div>AND</div>
              {/* <div>Nov 23rd, 2021</div> */}
              <input type='date' />
            </div>
            <div className='content-combo'>
              <button className='search'>Search</button>
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
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}>
          <div className='content-container'>
            <div className='content-combo'>
              <div>BETWEEN</div>
              <div>Dec 1st, 2021</div>
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
}

export default Tabs;
