import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutWrapper from "./wrappers/LayoutWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import vehiclesLoader from './loaders/units/vehiclesLoader';



const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "vehicles/pages/:page",
            element: <Vehicles />,
             loader: vehiclesLoader,
            hydrateFallbackElement: <div>Loading...</div>, 
             
          },
          {
            path:"register",
            element: <Register />
          },
          {
            path: "login",
            element: <Login />
          }
        ]
      },
      
    ]
  }
];
const router = createBrowserRouter(routes,
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionsErrorRevalidation: true,
    }
  });

const App = () => {
  return (
    <RouterProvider 
    router={router} 
    future={{
      v7_startTransition: true,
    }}
    />
  )
}

export default App;