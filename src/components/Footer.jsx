import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex h-fit w-full flex-col gap-8 bg-white px-[24px] py-12 text-center text-[18px] text-black md:px-[34px] lg:px-[44px]">
      <section className="flex h-fit w-full flex-col items-center justify-between gap-6 md:flex-row">
        <img src={logo} alt="imagem logo" />
        <nav>
          <ul className="items-center gap-4 text-base font-semibold md:flex">
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:font-bold hover:text-white hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:font-bold hover:text-white hover:underline">
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:font-bold hover:text-white hover:underline">
              <Link to="/servicos">Serviços</Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:font-bold hover:text-white hover:underline">
              <Link to="/galerias">Galeria de Casos</Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:font-bold hover:text-white hover:underline">
              <Link to="/blogs">Blog</Link>
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
        <ul className="flex flex-col items-center gap-4 pt-6 text-base font-semibold md:flex-row md:justify-center">
          <li className="cursor-pointer rounded-md p-1 underline transition-all hover:bg-gray-900 hover:font-bold hover:text-white">
            <Link to="/politica">Políticas de privacidade</Link>
          </li>
          <li className="cursor-pointer rounded-md p-1 underline transition-all hover:bg-gray-900 hover:font-bold hover:text-white">
            <Link to="/termos">Termos e condições</Link>
          </li>
          <li className="cursor-pointer rounded-md p-1 underline transition-all hover:bg-gray-900 hover:font-bold hover:text-white">
            <Link to="/cookies">Configurações de Cookies</Link>
          </li>
        </ul>
      </section>
      <p className="text-sm text-gray-500">
        &copy;{new Date().getFullYear()} Leandro Viana. Todos os direitos
        reservados. Desenvolvido por{" "}
        <a
          className="text-blue-800 hover:font-bold hover:underline"
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
