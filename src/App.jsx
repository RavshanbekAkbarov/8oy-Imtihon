import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layout
import MaineLayout from "./layout/MaineLayout";

//page
import About from "./page/About";
import Home from "./page/Home";

function App()  {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MaineLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
