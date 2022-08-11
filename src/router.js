import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/Footer';

import Home from './pages/home';
import Comands from './pages/comands';
import Login from './pages/login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/comands' exact element={<Comands />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
