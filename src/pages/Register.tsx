/** @format */

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

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
      confirm_password: Yup.string()
        .label("confirm password")
        .required()
        .oneOf([Yup.ref("mot_de_passe")], "Passwords must match"),
      profil: Yup.string().required("Profil is required"),
    }),

    onSubmit: async (values) => {
      const { email, mot_de_passe, profil } = values;

      try {
        const response = await axios.post(
          "http://localhost:5000/auth/signup",
          { email, mot_de_passe, profil },
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
    navigate("/login");
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area g-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 d-flex justify-content-center align-items-center ">
            <div>
              <h6>Register</h6>
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

          <div className="m-3">
            <label className="mb-2">Confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="confirm_password"
              name="confirm_password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm_password}
            />
          </div>

          {formik.touched.confirm_password && formik.errors.confirm_password ? (
            <div className="text-danger">{formik.errors.confirm_password}</div>
          ) : null}

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="profil">
              Profil
            </label>
            <select
              className="form-select"
              id="profil"
              name="profil"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.profil}
            >
              <option selected>...</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="superviseur">Superviseur</option>
            </select>
          </div>

          {formik.touched.profil && formik.errors.profil ? (
            <div className="text-danger">{formik.errors.profil}</div>
          ) : null}

          <div className="m-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
          <hr />
          <div className="m-3 d-flex justify-content-center align-items-center ">
            <div> Already have an account? </div>
            <div
              onClick={Toggle}
              className="fw-light pointer-on-hover p-1 div-on-hover"
            >
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
