import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import userStatusService from "../stores/userStatusStore";

export default function Profil() {
  const { saveUserStatus } = userStatusService();
  const [user, setuser] = useState({ email: "", profil: "" });

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/user");
        console.log("===>", response.data);
        setuser(response.data);
      } catch (error) {
        //   throw new Error(`Error making POST request: ${error}`);
        console.log(error);
      }
    };
    fetch();
  }, []);
  let test = Cookies.get("token");
  console.log("====>", test);

  const logOut = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/signout");

      saveUserStatus(false);
    } catch (error) {
      //   throw new Error(`Error making POST request: ${error}`);
      console.log(error);
    }
  };

  return (
    <>
      <div>Hello {user.email}</div>
      <button onClick={() => logOut()}>Log Out</button>
    </>
  );
}
