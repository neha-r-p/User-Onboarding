import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import './App.css'

const NewUserForm = ({ errors, touched, values, handleSubmit, status }) => {
    const [newUser, setNewUser] = useState([]);
    // console.log(newUser)

    useEffect(() => {
        if (status) {
            setNewUser([...newUser, status]);
          }
    }, [status]);

    
  return (
    <div className="newUserForm">
      <h2>New User Form</h2>
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field type="text" name="email" placeholder="E-mail" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label>
          I accept the Terms of Service.
          <Field type="checkbox" name="terms" />
          <span />
        </label>
        <button type="submit">Submit</button>
      </Form>
      {newUser.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

const FormikNewUserForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Your name is required."),
    email: Yup.string().required("Your e-mail is required."),
    password: Yup.string()
      .min(6, "Your password must be at least 6 characters.")
      .required("Your password is required."),
    terms: Yup.bool(true).required('You must accept the terms of service.')
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
          console.log(res)
          setStatus(res.data)})
      .catch(err => console.log(err.response));
  }
})(NewUserForm);

export default FormikNewUserForm;
