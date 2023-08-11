import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import MenuAreaLogada from './components/menuAreaLogada';
import Home from './pages/home';
import Contato from './pages/contato';
import LoginCadastro from './pages/loginCadastro';
import Produtos from './pages/produtos';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header>
    <MenuAreaLogada/>
  </Header>
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
