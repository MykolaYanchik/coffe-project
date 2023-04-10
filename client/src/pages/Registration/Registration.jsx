import React from "react";
import SmallLogo from "../../assets/icons/small-logo.svg";

export default function Registration() {
  return (
    <div className="login-container">
      <div className="small-logo">
        <img src={SmallLogo} alt="COFFEE | don't drink coffee alone" />
      </div>
      <span className="login-title">
        реєстрація
      </span>
    </div>
  );
}
