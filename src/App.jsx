//import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Sobre from "./pages/sobre/Sobre.jsx";
import Servicos from "./pages/servicos/Servicos.jsx";
import GaleriaCasos from "./pages/galeriaDeCasos/GaleriaCasos.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Politics from "./pages/footer/Politics.jsx";
import Terms from "./pages/footer/Terms.jsx";
import Cookies from "./pages/footer/Cookies.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <>
      <div
        className="w-full h-full absolute bg-white"
        style={{ paddingTop: "58px" }}
      >
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/galeria" element={<GaleriaCasos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/politica" element={<Politics />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
