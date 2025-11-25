//import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Sobre from "./pages/sobre/Sobre.jsx";
import Servicos from "./pages/servicos/Servicos.jsx";
import GaleriaCasos from "./pages/galeriaDeCasos/GaleriaCasos.jsx";
import Blogs from "./pages/blog/Blogs.jsx";
import Politics from "./pages/footer/Politics.jsx";
import Terms from "./pages/footer/Terms.jsx";
import Cookies from "./pages/footer/Cookies.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./index.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

import PostBlogPage from "./pages/blog/PostBlogPage.jsx";
import PostCasoJuridico from "./pages/galeriaDeCasos/PostCasoJuridico.jsx";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Só aplica o efeito depois de 100px
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Descendo → esconder
          setShowNavbar(false);
        } else {
          // Subindo → mostrar
          setShowNavbar(true);
        }
      } else {
        // Antes de 100px, navbar sempre visível
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className="absolute h-fit w-full bg-white"
        style={{ paddingTop: "58px" }}
      >
        <BrowserRouter>
          <ScrollToTop />

          <Header
            suaveTransicao={`transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/galerias" element={<GaleriaCasos />} />
            <Route path="/galeria/:id" element={<PostCasoJuridico />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<PostBlogPage />} />
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
