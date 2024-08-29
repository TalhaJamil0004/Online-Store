
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from './store/store';

export default function App() {
 return (
   <div>
  <Provider store={store}>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  
    </div>
  );
}


