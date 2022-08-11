import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Footer from './components/molecules/Footer';

import Home from './pages/home';
import Comands from './pages/comands';
import Login from './pages/login';
import Register from './pages/register';
import ConfirmRegister from './pages/confirmRegister';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/comands' exact element={<Comands />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/confirm-register' exact element={<ConfirmRegister />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
