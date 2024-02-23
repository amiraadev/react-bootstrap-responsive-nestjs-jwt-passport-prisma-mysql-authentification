import { Outlet, Navigate } from "react-router-dom";
import { userStatusStore } from "./stores/userStatusStore";
// import { useAuthStore } from "./stores/authStore";

const ProtectedRoutes = () => {
  // const { isLoggedIn } = useAuthStore();
  const { status } = userStatusStore();
  return <div>{status ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoutes;
