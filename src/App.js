import logo from './logo.svg';
import './App.css';

import About from './About'
import Service from './Service'
import Product from './Product'
import Contact from './Contact'
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
  <header>
            <div className="logo">Power Digite</div>
            <div className="display-menu">
                <Link  className="menu"to={"/"}>Home</Link>
                <Link  className="menu"to={"/about"}>About</Link>
                <Link  className="menu"to={"/services"}>Service</Link>
                <Link  className="menu"to={"/product"}>Product</Link>
                <Link  className="menu"to={"/contact"}>Contact</Link>
            </div>
   </header>
    <Routes>
 
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    
    </div>
  );
}

export default App;
