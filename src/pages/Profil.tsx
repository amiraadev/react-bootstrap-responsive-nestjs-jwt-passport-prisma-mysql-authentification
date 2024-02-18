import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Profil() {
  const [user, setuser] = useState("");

  //   useEffect(() => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/auth/signin",
  //         { email, mot_de_passe },
  //         //withCredentials:true :==> to allow this request to get credentials from that API Endpoint.
  //         { withCredentials: true }
  //       );
  //       console.log("===>", response);
  //       return response.data;
  //     } catch (error) {
  //       //   throw new Error(`Error making POST request: ${error}`);
  //       console.log(error);
  //     }
  //   }, []);
  let test = Cookies.get("token");
  console.log("====>", test);
  return <div>Profil</div>;
}
