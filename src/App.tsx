import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import MenuAreaLogada from './components/menuAreaLogada';
import Home from './pages/home';
import Contato from './pages/contato';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header>
    <MenuAreaLogada/>
  </Header>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contato' element={<Contato/>}/>
    {/* <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/> */}
  </Routes>
  
    <Footer />
  </BrowserRouter>
  
  </>
  );
}

export default App;
