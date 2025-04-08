import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Menu from './component/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Adideal from './pages/Adideal';
import "./App.css";
const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/adideal" element={<Adideal/>} />
            <Route path="/menu" element={<Menu/>} />
        </Routes>
    </Router>
  )
}

export default App
