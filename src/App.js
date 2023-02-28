import React from 'react'
import Nav from './app/component/navigation/Nav';
import Home from './app/view/Home';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { store } from './app/redux/store';
import ProductDetails from './app/view/ProductDetails';
import Minicart from './app/component/cart/Minicart';

function App() {
  return (
    <div className='container'>
      <Provider store={store}>
        
      <Nav />
      <Minicart />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
        </Routes>
        
      </Provider>
    </div>
  );
}

export default App;
