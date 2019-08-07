import React from "react";
import { Form, Field } from "formik";

const NewUserForm = () => {
  return (
    <div className="newUserForm">
      <h2>New User Form</h2>
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <Field type="text" name="email" placeholder="E-mail" />
        <Field type="text" name="password" placeholder="Password" />
        <label>
          <Field type="checkbox" name="terms" />
          <span />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default NewUserForm;
