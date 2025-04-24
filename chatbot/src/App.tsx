import { RouterProvider } from "react-router";
import router from "./Router";

import { AuthProvider } from "./components/input/AuthProvider";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
