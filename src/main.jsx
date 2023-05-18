import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from './Components/Layout/HomeLayout/HomeLayout.jsx';
import Home from './Components/Pages/Home/Home/Home.jsx';
import ErrorPage from './Components/Pages/Shared/Error/Errorpage.jsx';
import Login from './Components/Pages/Shared/Login/Login.jsx';
import Resister from './Components/Pages/Shared/Resister/Resister.jsx';
import AuthProvider from './Components/Pages/Shared/Authprovider/Authprovider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/login",
        element:<Login></Login>
      },{
        path:"/resister",
        element:<Resister></Resister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
 
);