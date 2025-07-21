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
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center text-black py-1 bg-white drop-shadow-md px-[24px] lg:px-[44px] md:px-[34px]">
        <a href="#">
          <img
            src={logo}
            alt="logo"
            className="hover:scale-105 transition-all"
          />
        </a>

        <ul className="hidden md:flex items-center gap-4 text-base">
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
            <Link onClick={() => AfterClicked()} to="/">
              Home
            </Link>
          </li>
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
            <Link onClick={() => AfterClicked()} to="/sobre">
              Sobre
            </Link>
          </li>
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
            <Link onClick={() => AfterClicked()} to="/servicos">
              Serviços
            </Link>
          </li>
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
            <Link onClick={() => AfterClicked()} to="/galeria">
              Galeria de Casos
            </Link>
          </li>
          <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
            <Link onClick={() => AfterClicked()} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
        {/*rounded-md*/}
        <button className="p-2 bg-black text-white hover:bg-gray-600">
          Entrar em contato
        </button>

        <div className="  md:hidden text-5xl cursor pointer text-center flex items-center justify-center">
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
          <ul className="absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-4 md:hidden">
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
              <Link onClick={() => AfterClicked()} to="/">
                Home
              </Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
              <Link onClick={() => AfterClicked()} to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
              <Link onClick={() => AfterClicked()} to="/servicos">
                Serviços
              </Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
              <Link onClick={() => AfterClicked()} to="/galeria">
                Galeria de Casos
              </Link>
            </li>
            <li className="p-1 hover:bg-gray-900 hover:text-white rounded-md transition-all cursor-pointer ">
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
