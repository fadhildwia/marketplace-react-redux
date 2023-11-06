import React from 'react';
import './App.css';
import { Header } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductDetail, ProductListing } from './views';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
