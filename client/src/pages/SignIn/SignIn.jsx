import React from "react";
import SmallLogo from "../../assets/icons/small-logo.svg";
import { useForm } from "../../utils/hooks/useForm";
import { validate } from "../../utils/formValidator/signInForm";
import { useNavigate } from "react-router-dom";
import links from "../../utils/links";

export default function SignIn() {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const form = useForm({
    initialState,
    validate,
    onSubmit,
  });

  const handleChange = (e) => {
    form.handleChange(e);
  };

  function onSubmit(values) {
    console.log(values);
    localStorage.setItem("auth", values.email);
    navigate(links.main);
  }

  const { values, errors, handleSubmit } = form;

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
              onChange={(e) => handleChange(e)}
              value={values.email}
            />
            <div className="input-wrapper"></div>
            <div className="error">{errors.email}</div>
          </div>

          <div className="input-container">
            <label className="input-label">Пароль</label>
            <input
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              value={values.password}
            />
            <div className="input-wrapper"></div>
            <div className="error">{errors.password}</div>
          </div>
          <button className="main-button" onClick={(e) => handleSubmit(e)}>
            увійти
          </button>
        </form>
      </div>
    </div>
  );
}
