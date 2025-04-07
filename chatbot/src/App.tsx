import { RouterProvider } from "react-router";
import router from "./Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

// export default function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }
