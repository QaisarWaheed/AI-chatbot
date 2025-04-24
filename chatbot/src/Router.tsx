import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
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
  {
    path: "chat",
    element: <Chat />,
  },
]);

export default router;
