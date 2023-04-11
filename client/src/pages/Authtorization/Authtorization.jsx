import React from "react";
import { Link } from "react-router-dom";
import links from "../../utils/links";
import MainLogo from "../../assets/icons/logo.svg";

export default function Authtorization() {
  return (
    <div className="auth-page">
      <div className="auth-page__logo-block">
        <img src={MainLogo} alt="COFFEE | don't drink coffee alone" />
      </div>
      <div className="auth-page__buttons-block">
        <div className="buttons-block">
          <Link to={links.signIn} className="main-button">
            Увійти
          </Link>
          <div className="auth-buttons__divider">або</div>
          <Link to={links.registration} className="main-button">
            Зареєструватися
          </Link>
        </div>
      </div>
    </div>
  );
}
