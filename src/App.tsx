import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Home from './pages/home';
import Contato from './pages/contato';
import LoginCadastro from './pages/loginCadastro';
import Produtos from './pages/produtos';
import NotFound from './pages/notFound';

function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contato' element={<Contato/>}/>
    <Route path='/loginCadastro' element={<LoginCadastro/>}/>
    <Route path='/produtos' element={<Produtos />}/>
    <Route path='/*' element={<NotFound />}/>
  </Routes>
  
    <Footer />
  </BrowserRouter>
  
  </>
  );
}

export default App;
