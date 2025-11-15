import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const AfterClicked = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-[24px] py-1 text-black drop-shadow-md md:px-[34px] lg:px-[44px]">
        <a href="#">
          <img
            src={logo}
            alt="logo"
            className="transition-all hover:scale-105"
          />
        </a>

        <ul className="hidden items-center gap-4 text-base md:flex">
          <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
            <Link onClick={() => AfterClicked()} to="/">
              Home
            </Link>
          </li>
          <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
            <Link onClick={() => AfterClicked()} to="/sobre">
              Sobre
            </Link>
          </li>
          <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
            <Link onClick={() => AfterClicked()} to="/servicos">
              Serviços
            </Link>
          </li>
          <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
            <Link onClick={() => AfterClicked()} to="/galerias">
              Galeria de Casos
            </Link>
          </li>
          <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
            <Link onClick={() => AfterClicked()} to="/blogs">
              Blog
            </Link>
          </li>
        </ul>
        {/*rounded-md*/}
        <button className="bg-black p-2 text-white hover:bg-gray-600">
          Entrar em contato
        </button>

        <div className="cursor pointer flex items-center justify-center text-center text-5xl md:hidden">
          {/* Icons for mobile menu toggle */}

          {isMenuOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="cursor-pointer text-[30px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer text-[30px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 flex w-full flex-col items-center gap-4 bg-white py-4 text-black md:hidden">
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
              <Link onClick={() => AfterClicked()} to="/">
                Home
              </Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
              <Link onClick={() => AfterClicked()} to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
              <Link onClick={() => AfterClicked()} to="/servicos">
                Serviços
              </Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
              <Link onClick={() => AfterClicked()} to="/galeria">
                Galeria de Casos
              </Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-900 hover:text-white">
              <Link onClick={() => AfterClicked()} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
