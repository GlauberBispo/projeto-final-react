import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import MenuAreaLogada from './components/menuAreaLogada';
import Home from './pages/home';
import Contato from './pages/contato';
import CadastroUser from './components/cadastroUser';

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
    {/* <Route path='/' element={<Home/>}/>  */}
    <Route path='/loginCadastro' element={<CadastroUser/>}/>
  </Routes>
  
    <Footer />
  </BrowserRouter>
  
  </>
  );
}

export default App;
