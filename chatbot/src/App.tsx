import { RouterProvider } from "react-router";
import router from "./Router";

import { AuthProvider } from "./components/input/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
