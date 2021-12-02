import React from "react";
import "./Home.css";
import LoginForm from "./LoginTest";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { SignUpForm } from "./SignUpForm";
// import ForgetPassword from "./ForgetPassword";
// import Welcome from "./Welcome";
// import Notification from "../Notification/Notification";
// import Register from "./Register";
// import {
//   AiOutlineLinkedin,
//   AiOutlineTwitter,
//   AiOutlineGithub,
//   AiOutlineInstagram,
//   AiOutlineFacebook,
//   AiOutlineGooglePlus,
// } from "react-icons/ai";
// import math1 from "../../assets/math1.png";
// import math2 from "../../assets/math2.png";
// import math3 from "../../assets/math3.png";
// import stepUp from "../../assets/stepup.png";
// import Logo from "../../assets/Logo.png";

const Home = () => {
  return (
    <>
      <div className='box'>
        <div className='square'>{/* <img src={stepUp} /> */}</div>
      </div>

      <section>
        {/* <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div> */}
        <div className='box'>
          {/* <div className='square'><img src={stepUp}/></div> */}

          {/* <div className='square'><img src={math3}/></div>
                <div className='square'><img src={math3}/></div>
                <div className='square'><img src={math3}/></div>
                <div className='square'><img src={math1}/></div>
                <div className='square'><img src={math2}/></div>
                <div className='square'><img src={math3}/></div>
                <div className='square'><img src={stepUp}/></div> */}

          {/* <div className='container'>

                </div> */}
          <div className='container'>
            <div className='form'>
              <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={LoginForm} />
                  <Route path='/login' component={LoginForm} />
                  {/* <Route path='/sign-up' component={SignUpForm} />
                <Route path='/forget-password' component={ForgetPassword} /> */}
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
        {/* <ul className='footer'>
                <li><a href='#'><AiOutlineLinkedin/></a></li>
                <li><a href='#'><AiOutlineTwitter/></a></li>
                <li><a href='#'><AiOutlineGithub/></a></li>
                <li><a href='#'><AiOutlineInstagram/></a></li>
                <li><a href='#'><AiOutlineFacebook/></a></li>


            </ul> */}

        <div className='square footer-logo'>
          {/* <h3>Designed by</h3> <img src={Logo} /> <h3>@2021</h3> */}
        </div>
      </section>
    </>
  );
};

export default Home;
