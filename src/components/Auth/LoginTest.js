import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
// import { loginInitiate } from "../../store/actions";
// import { userActions } from "../../store/user-slice";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGooglePlus,
} from "react-icons/ai";

const LoginForm = () => {
  const loginRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //   const user = useSelector((state) => state.user);

  //   const dispatch = useDispatch();
  //   const history = useHistory();
  //   console.log("Login Out Effect", user);

  //   useEffect(() => {
  //     console.log("Login Effect", user);
  //     if (user) {
  //       history.push("/login");
  //     }
  //   }, [user, history]);

  const loginHandler = (event) => {
    event.preventDefault();
    // dispatch(loginInitiate(emailRef.current.value,
    //     passwordRef.current.value))
    // dispatch(userActions.user({currentUser:{
    //     email:emailRef.current.value,
    //     password:passwordRef.current.value

    // }}))

    loginRef.current.reset();
  };

  return (
    <>
      <h2>Login</h2>

      <form ref={loginRef} onSubmit={loginHandler}>
        <div className='login'>
          <input type='text' placeholder='Email' ref={emailRef} required />
        </div>
        <div className='login'>
          <input
            type='password'
            placeholder='Password'
            ref={passwordRef}
            required
          />
        </div>
        <div className='input-box'>
          <input type='submit' value='Login' />
        </div>
        <p className='forget'>
          Forgot Password? <Link to='/forget-password'>Click Here</Link>
        </p>
        <p className='forget'>
          Don`t have an account? <Link to='sign-up'>Sign up</Link>
        </p>
        <ul>
          <li>
            <a href='#'>
              <AiOutlineGooglePlus />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiOutlineFacebook />
            </a>
          </li>
        </ul>
      </form>
    </>
  );
};

export default LoginForm;
