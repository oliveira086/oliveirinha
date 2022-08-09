import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/molecules/Footer';

import Home from './pages/home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
