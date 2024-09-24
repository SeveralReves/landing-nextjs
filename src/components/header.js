"use client";
import { useEffect, useState } from "react";
import Headroom from "headroom.js";

// components/Header.js
export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    document.body.style.overflowY = menuActive ? "auto" : "hidden";
    setMenuActive(!menuActive);
  };

  const menuContent = [
    {
      url: "#home",
      title: "Inicio",
    },
    {
      url: "#services",
      title: "Servicios",
    },
    {
      url: "#testimonials",
      title: "Testimonios",
    },
    {
      url: "#contact",
      title: "Contacto",
    },
  ];

  const initHeadroom = () => {
    const myElement = document.querySelector("header");

    if (myElement) {
      const headroom = new Headroom(myElement, {
        offset: 100, // Cuando hacer que el header desaparezca/aparezca
        tolerance: 5, // La sensibilidad para el desplazamiento
      });

      headroom.init();
    }
  };
  const initScrollToHome = () => {
    const anchors = document.querySelectorAll(
      ".header__link:not([target='_blank'])"
    );

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        //Ajusta la posición de scroll en 50px hacia abajo
        window.scrollTo({
          top: targetPosition - 20, // Agrega 50px a la posición de la sección objetivo
          behavior: "smooth",
        });
        document.body.style.overflowY = "auto";
        setMenuActive(false);
      });
    });
  };

  useEffect(() => {
    initScrollToHome();
    initHeadroom();
  }, []);
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">
          <span>Fin</span>Pro
        </h1>
        <nav className={`header__nav  ${menuActive ? "is-active" : ""}`}>
          <ul className="header__ul">
            {menuContent.map((link, index) => (
              <li key={index} className="header__li">
                <a href={link.url} title={link.title} className="header__link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="button__primary header__action">
            Obténlo ahora
          </a>
        </nav>
        <button
          onClick={handleClick}
          className={`hamburger ${menuActive ? "is-active" : ""}`}
        >
          <div className="hamburger__layer hamburger__layer--top"></div>
          <div className="hamburger__layer hamburger__layer--mid"></div>
          <div className="hamburger__layer hamburger__layer--bottom"></div>
        </button>
      </div>
    </header>
  );
}
