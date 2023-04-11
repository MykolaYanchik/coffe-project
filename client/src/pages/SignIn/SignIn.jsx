import React, { useState } from "react";
import SmallLogo from "../../assets/icons/small-logo.svg";

export default function SignIn() {
  const [form, setForm] = useState({});

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="login-block">
      <div className="login-block__logo">
        <img src={SmallLogo} alt="COFFEE | don't drink coffee alone" />
      </div>
      <div className="login-block__form">
        <div className="form-title">Вхід у додаток</div>
        <form className="login-form">
          <div className="input-container">
            <label className="input-label">Email</label>
            <input
              type="text"
              name="email"
              onChange={(e) => handlerChange(e)}
            />
            <div className="input-wrapper"></div>
            <div className="error"></div>
          </div>

          <div className="input-container">
            <label className="input-label">Пароль</label>
            <input
              type="password"
              name="password"
              onChange={(e) => handlerChange(e)}
            />
            <div className="input-wrapper"></div>
            <div className="error"></div>
          </div>
          <button className="main-button" onClick={(e) => handlerSubmit(e)}>
            увійти
          </button>
        </form>
      </div>
    </div>
  );
}
