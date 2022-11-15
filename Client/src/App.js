import './App.css'
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Create from "./Create"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } />

          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/create" element={<Create/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;