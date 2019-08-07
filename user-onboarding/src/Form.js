import React from "react";
import axios from 'axios';
import { Form, Field, withFormik } from "formik";


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

const FormikNewUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms }){
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        };
    },


    handleSubmit(values) {
        axios
          .post('https://reqres.in/api/users/', values)
          .then(res => console.log(res))
          .catch(err => console.log(err.response));
      }

})(NewUserForm)

export default FormikNewUserForm;
