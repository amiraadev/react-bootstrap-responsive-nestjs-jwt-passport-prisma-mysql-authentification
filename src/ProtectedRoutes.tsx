import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "./stores/authStore";

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuthStore();
  return (
    <div>
      {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default ProtectedRoutes;
