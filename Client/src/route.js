import React from "react"
import { useRoutes } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
const [user,setLoginUser] = useState({
 
})
const Routes = () => useRoutes([
    {
      path: "/",
      element: user && user._id ? <Homepage/>:<Login/>,
      children: [
        {
          path: "/",
          index: true,
          element: <Homepage/>,
        },
        // {
        //     path: "/team-member",
        //     element: <Team />,
        // },
        ],
    },
    {
        path: "/Login",
        element: <Login setLoginUser={setLoginUser}/>
    },
    {
        path:"/Register",
        element: <Register/>
    }
    
  ]);

export default Routes;