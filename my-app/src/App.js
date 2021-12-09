import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import ItemPage from './components/ItemPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Buy from '../src/components/Buy';



export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <CssBaseline />
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/ItemPage/:id" element={<ItemPage />} />
          <Route path="/cart" element={<Buy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  );
}
