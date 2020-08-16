import * as React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import withLogin from '../../hocs/with-login/with-login';
import {LoginErrorMesseges} from '../../constants';

interface Props {
  isValid: boolean;
  loading: boolean;
  emailError: string;
  passwordError: string;
  loginError: boolean;
  onEmailChange: () => void;
  onPasswordChange: () => void;
  onSubmit: () => void;
}

const Login = (props: Props) => {
  const {isValid, emailError, passwordError, loginError, onEmailChange, onPasswordChange, onSubmit, loading} = props;

  return loading ? <div>Loading ...</div> : (
    <div className="user-page">
      <Header />
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmit}>

          {emailError && <div className="sign-in__message"><p>{LoginErrorMesseges.EMAIL}</p></div>}
          {passwordError && <div className="sign-in__message"><p>{LoginErrorMesseges.PASSWORD}</p></div>}
          {loginError && <div className="sign-in__message"><p>{LoginErrorMesseges.LOGIN_FAILED}</p></div>}

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={onEmailChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={onPasswordChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={!isValid}>Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default withLogin(Login);
