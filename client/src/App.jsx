import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutWrapper from "./wrappers/LayoutWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import vehiclesLoader from './loaders/units/vehiclesLoader';
import store from "./redux/app/store";
import { Provider } from "react-redux";
import authLoader from "./loaders/units/authLoader";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import Logout from "./components/Logout";
import AdminDashboardWrapper from "./wrappers/AdminDashboardWrapper";
import Dashboard from "./pages/user/Dashboard";
import Cart from "./pages/user/Cart";
import Bookings from "./pages/user/Bookings";
import UserVehicles from "./pages/user/UserVehicles";

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
            element: <Register />,
            hydrateFallbackElement: <div>Loading...</div>,
          },
          {
            path: "login",
            element: <Login />,
            hydrateFallbackElement: <div>Loading...</div>,
          },
          {
            path: "logout",
            element: <Logout />,
            hydrateFallbackElement: <div>Loading...</div>,
          }
         
        ]
      },
      
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "",
        element: <Dashboard />,
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "vehicles/pages/:page",
        element: <UserVehicles />,
        loader: vehiclesLoader,
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "cart",
        element: <Cart />,
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path: "bookings",
        element: <Bookings />,
        hydrateFallbackElement: <div>Loading...</div>,
      }
    ]      
     
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>,
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
    <Provider store={store}>
      <RouterProvider router={router}
      future={{
       v7_startTransition: true,
      }} />
    </Provider>
  )
}

export default App;