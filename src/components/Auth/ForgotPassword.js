import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <h2>Forgot Password</h2>
      <form>
        <div className='input-box'>
          <input type='text' placeholder='Email' />
        </div>

        <div className='input-box'>
          <input type='submit' value='Verify' />
        </div>
        <p className='forget'>
          Remember Password? <Link to='/login'>Login</Link>
        </p>
        <p className='forget'>
          Don`t have an account? <Link to='sign-up'>Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default ForgetPassword;
