import React from "react";
import SmallLogo from "../../assets/icons/small-logo.svg";
import { useForm } from "../../utils/hooks/useForm";
import { validate } from "../../utils/formValidator/registrationForm";

export default function Registration() {
  const initialState = {
    email: "",
    fullName: "",
    userName: "",
    password: "",
  };

  const form = useForm({
    initialState,
    validate,
    onSubmit,
  });

  const handleChange = (e) => {
    form.handleChange(e)
  }

  function onSubmit(values) {
    console.log(values)
  }

  const {errors, values, handleSubmit} = form;

  return (
    <div className="login-block">
      <div className="login-block__logo">
        <img src={SmallLogo} alt="COFFEE | don't drink coffee alone" />
      </div>
      <div className="login-block__form">
        <div className="form-title">Реєстрація</div>
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
            <div className="error">{errors?.email}</div>
          </div>

          <div className="input-container">
            <label className="input-label">Повне ім'я</label>
            <input
              type="text"
              name="fullName"
              onChange={(e) => handleChange(e)}
              value={values.fullName}
            />
            <div className="input-wrapper"></div>
            <div className="error">{errors?.fullName}</div>
          </div>

          <div className="input-container">
            <label className="input-label">Ім'я користувача</label>
            <input
              type="text"
              name="userName"
              onChange={(e) => handleChange(e)}
              value={values.userName}
            />
            <div className="input-wrapper"></div>
            <div className="error">{errors?.userName}</div>
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
            <div className="error">{errors?.password}</div>
          </div>
          <button className="main-button" onClick={(e) => handleSubmit(e)}>
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
}
