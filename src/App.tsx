import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import MenuAreaLogada from './components/menuAreaLogada';
import Home from './components/home';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header>
    <MenuAreaLogada/>
  </Header>
  <Routes>
    <Route path='/' element=''/>
  </Routes>
    <Home />
    <Footer />
  </BrowserRouter>
  
  </>
  );
}

export default App;
