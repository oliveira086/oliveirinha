import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/molecules/Footer";
import Home from "./pages/home";
import Comands from "./pages/comands";
import Login from "./pages/login";
import Register from "./pages/register";
import ConfirmRegister from "./pages/confirmRegister";
import Terms from "./pages/terms";
import Dashboard from "./pages/dashboard";
import Feed from "./pages/feed";
import Upload from "./pages/uploads";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/comands" exact element={<Comands />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/confirm-register" exact element={<ConfirmRegister />} />
        <Route path="/terms" exact element={<Terms />} />
        <Route path="/home" exact element={<Dashboard />} />
        <Route path="/feed" exact element={<Feed />} />
        <Route path="/uploads" exact element={<Upload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
