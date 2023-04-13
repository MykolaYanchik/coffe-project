import {
  emailValidator,
  passwordValidator,
  requiredValidator,
} from "./validator";

export function validate(values) {
  const { email, password } = values;
  let errors = {};
  if (!email) {
    errors.email = requiredValidator(email);
  } else if (emailValidator(email)) errors.email = emailValidator(email);

  if (!password) {
    errors.password = requiredValidator(password);
  } else if (passwordValidator(password)) {
    errors.password = passwordValidator(password);
  }

  return errors;
}
