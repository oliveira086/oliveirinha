import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/Footer';

import Home from './pages/home';
import Comands from './pages/comands';

export default function Router() {
  return (
    <BrowserRouter>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/comands' exact element={<Comands />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
