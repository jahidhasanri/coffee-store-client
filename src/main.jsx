import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import AddCoffeePagae from './page/AddCoffeePagae.jsx';
import SingleCoffe from './page/SingleCoffe.jsx';
import UpdatePage from './page/UpdatePage.jsx';
import AuthProvider from './Authprovider/AuthProvider.jsx';
import Singin from './page/Singin.jsx';
import Users from './page/Users.jsx';
import Login from './page/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:"/addCoffe",
    element:<AddCoffeePagae></AddCoffeePagae>
  },
  {
    path:'/singleCoffee/:id',
    element:<SingleCoffe></SingleCoffe>,
    loader:()=>fetch("http://localhost:5000/users")
  },
  {
    path:'/update/:id',
    element:<UpdatePage></UpdatePage>,
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  },
  {
    path: '/singin',
    element: <Singin></Singin> // Corrected typo here
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=> fetch('http://localhost:5000/man')
  },
  {
    path:'/login',
    element:<Login></Login>
  }
 


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
