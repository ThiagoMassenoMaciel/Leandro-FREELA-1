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
import ScrollToTop from "./components/ScrollToTop.jsx";

import PostBlogPage from "./pages/blog/PostBlogPage.jsx";
import PostCasoJuridico from "./pages/galeriaDeCasos/PostCasoJuridico.jsx";

function App() {
  return (
    <>
      <div
        className="absolute h-full w-full bg-white"
        style={{ paddingTop: "58px" }}
      >
        <BrowserRouter>
          <ScrollToTop />

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/galerias" element={<GaleriaCasos />} />
            <Route path="/galeria/:id" element={<PostCasoJuridico />} />
            <Route path="/blogs" element={<Blog />} />
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
