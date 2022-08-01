import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
function App() {
  return (
   <>
      <Routes>
        {/* routes goes here */}
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
      
   </>
  );
}

export default App;
