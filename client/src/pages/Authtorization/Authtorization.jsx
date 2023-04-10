import React from "react";
import { Link } from "react-router-dom";
import links from "../../utils/links";
import MainLogo from "../../assets/icons/logo.svg";

export default function Authtorization() {
  return (
    <div className="auth-container">
      <div className="auth-logo-container">
        <img src={MainLogo} alt="COFFEE | don't drink coffee alone" />
      </div>
      <div className="auth-buttons">
        <Link to={links.signIn} className="main-button">Увійти</Link>
          <div className="auth-buttons__divider">
            <span>або</span>
          </div>
        <Link to={links.registration} className="main-button">Зареєструватися</Link>
      </div>
    </div>
  );
}
