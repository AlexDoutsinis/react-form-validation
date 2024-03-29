import React from "react";
import useForm from "./useForm";
import validate from "./validateLogin";

function Form() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.password && "inputError"}`}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
