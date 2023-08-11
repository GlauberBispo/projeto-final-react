import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import Contato from './pages/contato';
import LoginCadastro from './pages/loginCadastro';
import Produtos from './pages/produtos';
import { useState } from 'react';
import Menu from './components/menu';

function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contato' element={<Contato/>}/>
    <Route path='/loginCadastro' element={<LoginCadastro/>}/>
    <Route path='/produtos' element={<Produtos />}/>
  </Routes>
  
    <Footer />
  </BrowserRouter>
  
  </>
  );
}

export default App;
