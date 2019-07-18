import React from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';


 function Form() {
    return (
        <div>
            <Form>
                  <label htmlFor="email">Email</label>
      <Field 
      autoComplete="off" type="text" id="email" name="email" />
        <p>{touched.email && errors.email}</p>

      <label htmlFor="password">Password</label>
      <Field autoComplete="off" type="password" id="password" name="password" />
<p>{touched.password && errors.password}</p>
<button type = "submit">Login!</button>
</Form>
        </div>
    )
}
export default withFormik({
    mapPropsToValues: () => {
      return {
        email: "",
        password: ""
      };
    },
    handleSubmit(values) {
      
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'To purchase your goldfish please login',
        showConfirmButton: false,
        timer: 1500
      })
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .min(3, "Must be 3 characters or more")
        .email("Please submit a valid email")
        .required("This field is required"),
      password: Yup.string()
        .min(8, "Name must be at least 8 characters long")
        .required("This field is required")
      
    })
  })(Form);
