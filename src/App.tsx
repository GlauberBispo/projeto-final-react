import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header>
    <Menu/>
  </Header>
  <Routes>
    <Route path='/' element=''/>
  </Routes>
    <Footer />
  </BrowserRouter>
  </>
  );
}

export default App;
