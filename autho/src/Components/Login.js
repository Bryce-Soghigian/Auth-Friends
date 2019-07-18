import React from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';


 function Login({touched, errors}) {
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
        title: 'Are you sure you would like to login?',
        text: "If so confirm below",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Ok',
            'Thank you for choosing our service!',
            'success'
          )
        }
      })
      // Swal.fire({
      //   position: 'top-end',
      //   type: 'success',
      //   title: 'Welcome back!',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
      console.log(values)
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
  })(Login);
