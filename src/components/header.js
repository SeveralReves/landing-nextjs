"use client";
import { useEffect } from "react";
import Headroom from "headroom.js";

// components/Header.js
export default function Header() {
  const menu = [
    {
      url: '#home',
      title: 'Inicio',
    },
    {
      url: '#services',
      title: 'Servicios',
    },
    {
      url: '#testimonials',
      title: 'Testimonios',
    },
    {
      url: '#contact',
      title: 'Contacto',
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
        <nav className="header__nav">
          <ul className="header__ul">
            {
              menu.map((link,index)=>(
                <li key={index} className="header__li">
                  <a href={link.url} title={link.title} className="header__link">
                    {link.title}
                  </a>
                </li>
              ))
            }
          </ul>
          <a href="#" className="button__primary header__action">Obténlo ahora</a>
        </nav>
      </div>
    </header>
  );
}
