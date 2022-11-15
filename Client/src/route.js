import React from "react"
import { useRoutes } from "react-router-dom";
import "./route.css"
import { useState } from "react";
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";

// const Routes = () => {
//   const [user,setLoginUser] = useState({
 
//   });

//     useRoutes([
//       {
//         path: "/",
//         element: user && user._id ? <Homepage/>:<Login/>,
//         children: [
//           {
//             path: "/",
//             index: true,
//             element: <Homepage/>,
//           },
//           // {
//           //     path: "/team-member",
//           //     element: <Team />,
//           // },
//           ],
//       },
//       {
//           path: "/Login",
//           element: <Login setLoginUser={setLoginUser}/>
//       },
//       {
//           path:"/Register",
//           element: <Register/>
//       }
      
//     ]);
// }


function Routess() {
  const [user,setLoginUser] = useState({
 
  })
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route exact path="/">
    {
      user && user._id ? <Homepage/>:<Login/>
    }<Homepage/>
  </Route>
  <Route path="/Login" element={<Login setLoginUser={setLoginUser}/>}/>
  <Route path="/Register" element={<Register/>}/>
</Routes>

      </BrowserRouter>
   
    </div>
  );
}
export default Routess;
