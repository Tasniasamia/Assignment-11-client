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
import Blog from './Components/Pages/Home/Blog/Blog.jsx';
import AddToy from './Components/Pages/Home/Add_Toy/AddToy.jsx';
import AllToys from './Components/Pages/Home/AllToys/AllToys.jsx';
import ToyDetails from './Components/Pages/Home/NormalToyDetails/ToyDetails.jsx';
import MyToy from './Components/Pages/Home/MyToy/MyToy.jsx';
import Update from './Components/Pages/Home/MyToysUpdate/Update.jsx';
import Subcategorydetails from './Components/Pages/Home/Subcategorydetails/Subcategorydetails.jsx';
import Private_route from './Components/Pages/Shared/PrivateRoute/PrivateRoute.jsx';

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
      },{
        path:"/blog",
        element:<Blog></Blog>
      },{
        path:"/addtoy",
        element:<Private_route><AddToy></AddToy></Private_route>
      },{
        path:"/alltoy",
        element:<AllToys></AllToys>
      },{
        path:"/alltoy/:id",
        element:<ToyDetails></ToyDetails>,
        loader:({params})=>fetch(`http://localhost:9999/AllToys/${params.id}`)
  }
,
{
  path:"/mytoy",
  element:<Private_route><MyToy></MyToy></Private_route>
}
,
{
  path:"/updatedata/:id",
  element:<Update></Update>,
  loader:({params})=>fetch(`http://localhost:9999/mytoysdata/${params.id}`)
},
{
  path:"/subcategory/:id",
  element:<Private_route><Subcategorydetails></Subcategorydetails></Private_route>,
  loader:({params})=>fetch(`http://localhost:9999/subcatogory/${params.id}`)
}




]}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
 
);