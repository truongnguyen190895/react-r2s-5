import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

const validationSchema = Yup.object().shape({
  job: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Job can not be empty!"),
  email: Yup.string().email("Is not email form, please check again").required("Email is required!"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      job: "",
    },
    onSubmit: (values) => {
      console.log("form value from formik ", values);
    },
    onReset: () => {
      console.log("reset form");
    },
    validationSchema: validationSchema,
  });

  // console.log("formik ", formik);

  return (
    <div className="App">
      <h1>Simple Form demo</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address*</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        {formik.errors.email && formik.touched.email ? (
          <small style={{ color: "red" }}>{formik.errors.email}</small>
        ) : null}

        <br />
        <label htmlFor="email">Job title*</label>
        <input
          id="job"
          type="text"
          name="job"
          value={formik.values.job}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.job && formik.touched.job ? (
          <small style={{ color: "red" }}>{formik.errors.job}</small>
        ) : null}
        <br />
        <button type="submit">Click to submit</button>
        <button onClick={formik.handleReset}>Click to reset</button>
      </form>
    </div>
  );
}

export default App;
