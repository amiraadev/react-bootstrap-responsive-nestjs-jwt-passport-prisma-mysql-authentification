/** @format */

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthStore();

  //Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      mot_de_passe: "",
      confirm_password: "",
      profil: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Format email invalide")
        .required("Required field"),
      mot_de_passe: Yup.string()
        .min(6, "password must be at least 6 characters")
        .required("Required field"),
    }),
    onSubmit: async (values) => {
      const { email, mot_de_passe } = values;
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/signin",
          { email, mot_de_passe },
          //withCredentials:true :==> to allow this request to get credentials from that API Endpoint.
          { withCredentials: true }
        );
        console.log("===>", response);
        return response.data;
      } catch (error) {
        //   throw new Error(`Error making POST request: ${error}`);
        console.log(error);
      }
      //   console.log(values);
      //   formik.resetForm();
    },
  });

  const Toggle = useCallback(() => {
    navigate("/register");
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-modal shadow box-area g-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 d-flex justify-content-center align-items-center ">
            <div>
              <h6>Login</h6>
            </div>
          </div>
          <hr />
          <div className="mb-4 d-flex justify-content-center align-items-center ">
            <div>
              <h4>Welcome back</h4>
            </div>
          </div>
          <div className="m-3">
            <label className="mb-2">Email address</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
            <br></br>
          </div>
          <div className="m-3">
            <label className="mb-2">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="mot_de_passe"
              name="mot_de_passe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mot_de_passe}
            />
          </div>

          {formik.touched.mot_de_passe && formik.errors.mot_de_passe ? (
            <div className="text-danger">{formik.errors.mot_de_passe}</div>
          ) : null}
          <br></br>

          <div className="d-grid">
            <button type="submit" className='class-button background-green'>
              Submit
            </button>
          </div>
          <hr />
          <div className="m-3 d-flex justify-content-center align-items-center ">
            <div>First Time using roundstack? </div>
            <div
              onClick={Toggle}
              className="fw-light pointer-on-hover p-1 div-on-hover"
            >
              Create an account
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
