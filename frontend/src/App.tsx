import { RouterProvider } from "react-router-dom";
import route from "./AppRoutes";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
