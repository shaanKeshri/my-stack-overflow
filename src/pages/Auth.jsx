import { useState } from 'react';
import './auth.css';
import icon from '../assets/icon.png';
import Caption from './Caption';

const Auth = () => {
  const [signup, setSignup] = useState(false);
  const convert = () => {
    setSignup(!signup);
  };
  return (
    <section className="auth-section">
      {signup && <Caption />}
      <div className="auth-container">
        {!signup && <img src={icon} alt="symbole" className="login-logo" />}

        <form className="block">
          <label htmlFor="id">
            <h4>Email</h4>
            <input type="email" name="id" id="id" />
          </label>
          <label htmlFor="pw">
            <div>
              <h4>Password</h4>
              {!signup && <p style={{ color: 'blue' }}>Forgot Password?</p>}
            </div>

            <input type="password" name="pw" id="pw" />
            {signup}
          </label>
          <p>
            Passwords must contain at least eight <br />
            characters including atleast 1 letter and
            <br /> 1 number.
          </p>
          <div>
            <button type="submit" className="auth-btn">
              {signup ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </form>
        <p>
          {signup ? 'Already have an Account?' : "haven't any Account"}
          <button type="button" className="handle-switch-btn" onClick={convert}>
            {signup ? 'Login' : 'Sign up'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
