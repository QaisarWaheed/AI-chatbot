import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordReset from "./pages/PasswordReset";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Register />,
  },
  {
    path: "ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "verify",
    element: <Verify />,
  },
]);

export default router;
