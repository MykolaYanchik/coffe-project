import { useEffect, useState } from "react";

export const useForm = ({ initialState, validate, onSubmit }) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) onSubmit(values);
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmiting(true);
  };

  return { values, errors, handleChange, handleSubmit };
};
