import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-white text-black text-[18px] text-center flex flex-col gap-8 px-[24px] lg:px-[44px] md:px-[34px] py-12">
      <section className="w-full h-fit flex flex-col md:flex-row justify-between items-center gap-6">
        <img src={logo} alt="imagem logo" />
        <nav>
          <ul className="md:flex items-center gap-4 text-base font-semibold">
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer hover:underline hover:font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer hover:underline hover:font-bold">
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer hover:underline hover:font-bold">
              <Link to="/servicos">Serviços</Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer hover:underline hover:font-bold">
              <Link to="/galeria">Galeria de Casos</Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer hover:underline hover:font-bold">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-3xl" icon={faWhatsapp} />
          </a>
        </div>
      </section>
      <section className="border-t-2 border-black">
        <ul className="md:flex-row md:justify-center flex flex-col items-center gap-4 pt-6 text-base font-semibold">
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer underline hover:font-bold ">
            <Link to="/politica">Políticas de privacidade</Link>
          </li>
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer underline hover:font-bold ">
            <Link to="/termos">Termos e condições</Link>
          </li>
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer underline hover:font-bold">
            <Link to="/cookies">Configurações de Cookies</Link>
          </li>
        </ul>
      </section>
      <p className="text-sm text-gray-500 ">
        &copy;{new Date().getFullYear()} Leandro Viana. Todos os direitos
        reservados. Desenvolvido por{" "}
        <a
          className="text-blue-800 hover:underline hover:font-bold"
          href="https://www.linkedin.com/in/tmm3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thiago Masseno
        </a>
      </p>
    </footer>
  );
};

export default Footer;
