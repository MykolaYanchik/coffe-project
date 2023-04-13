export function emailValidator(values) {
  if (!/\S+@\S+\.\S+/.test(values)) return "Email введене не вірно!";
}

export function requiredValidator() {
  return "Обов'язкове поле";
}

export function passwordValidator(values) {
  if (values.length < 8) return "Пароль має містити не менше 8 символів!";
}

export function userNameValidator(values) {
    if(!/[0-9A-Za-z._]$/.test(values)) {
        return "Тільки латинськи букви, цифри . і _"
    }
}
