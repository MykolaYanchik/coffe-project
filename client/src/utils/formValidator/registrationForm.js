import {
  emailValidator,
  passwordValidator,
  requiredValidator,
  userNameValidator,
} from "./validator";

export function validate(values) {
  const { email, fullName, userName, password } = values;
  let errors = {};

  if (!email) {
    errors.email = requiredValidator(email);
  } else if (emailValidator(email)) errors.email = emailValidator(email);

  if (!fullName) errors.fullName = requiredValidator(fullName);

  if (!userName) {
    errors.userName = requiredValidator(userName);
  } else if (userNameValidator(userName)) errors.userName = userNameValidator(userName);

  if (!password) {
    errors.password = requiredValidator(password);
  } else if (passwordValidator(password)) {
    errors.password = passwordValidator(password);
  }

  return errors;
}
