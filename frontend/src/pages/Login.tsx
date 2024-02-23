/** @format */

import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import userStatusService from "../stores/userStatusStore";
import { userStatusStore } from "../stores/userStatusStore";

interface User {
  email: string;
  profil: string;
}

const Login = () => {
  const [user, setUser] = useState<User>({ email: "", profil: "" });
  const [ok, setOk] = useState(false);
  const { saveUserStatus } = userStatusService();
  const { status } = userStatusStore();

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
          { email, mot_de_passe }
          //withCredentials:true :==> to allow this request to get credentials from that API Endpoint.
          // { withCredentials: true }
        );
        console.log("===>", response);
        console.log("i===>", response.data.id);

        saveUserStatus(true);

        setOk(true);
        navigate("/profil");

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

  //getProfil:
  // const getProfil = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/users/${id}`);
  //     console.log("===>", response);
  //     console.log("i===>", response.data.user);
  //     setUser(response.data.user);
  //     console.log("user profil===>", user);
  //     return response.data;
  //   } catch (error) {
  //     //   throw new Error(`Error making POST request: ${error}`);
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {" "}
      <div className="container d-flex justify-content-center align-items-center  " >
        <div className="row border rounded-5 p-3 bg-modal shadow  ">
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
              <button type="submit" className="class-button background-green">
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
      </div>{" "}
      {ok && (
        <h1>
          Welcome {user.email} , your profile is : {user.profil}
        </h1>
      )}
      {/* <button onClick={() => getProfil()}>Test Profil</button> */}
    </>
  );
};

export default Login;
