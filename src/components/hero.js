"use client";
import Glider from "glider-js";
import "glider-js/glider.min.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const heroContent = [
    {
        title: 'Consigue tus metas ahora mismo',
        text: 'Queremos asegurarnos de que tus sueños son posibles, no pierdas las oportunidades y revisa nuestros servicios',
        button: {
            title: 'Ver servicios',
            url: '#services'
        },
        image: {
            url: '/images/Prestamos-personales.jpg',
            alt: 'Ver servicios'
        },
        video: null,
        isVideo: false,
    },
    {
        title: 'Compra con Confianza y Obtén Recompensas',
        text: 'Disfruta de la libertad de comprar ahora y pagar después con nuestras tarjetas de crédito, mientras acumulas puntos y beneficios exclusivos. Maximiza tu poder adquisitivo.',
        button: {
            title: 'Solicita tu tarjeta de crédito y empieza a ganar recompensas.',
            url: '#services'
        },
        image: {
            url: '/images/Compra.jpg',
            alt: 'Ver servicios'
        },
        video: null,
        isVideo: false,
    },
    {
        title: 'Ahorra Hoy para un Mañana Mejor',
        text: 'Haz crecer tu dinero de manera segura con nuestras cuentas de ahorro. Con rendimientos competitivos, tu futuro financiero estará en buenas manos.',
        button: {
            title: 'Abre tu cuenta de ahorro y comienza a ahorrar ahora',
            url: '#services'
        },
        image: {
            url: '/images/cuentas-ahorro.jpg',
            alt: 'Ver servicios'
        },
        video: null,
        isVideo: false,
    },
    {
        title: 'Conduce el Auto de tus Sueños',
        text: 'Haz realidad la compra de tu auto nuevo o usado con nuestros préstamos automotrices. Tasas competitivas y plazos que se adaptan a ti.',
        button: {
            title: 'Solicita tu préstamo automotriz y obtén tu nuevo auto hoy',
            url: '#services'
        },
        image: {
            url: '/images/prestamos-carro.jpg',
            alt: 'Ver servicios'
        },
        video: null,
        isVideo: false,
    },
];
useEffect(() => {
    const slider = document.querySelector(".glider");
    const glider = new Glider(slider, {
      slidesToShow: 1,
      dots: "#dots",
      arrows: {
        prev: ".hero__slider--prev",
        next: ".hero__slider--next",
      },
      // Configuración adicional para autoplay
      infinite: true,
      draggable: true,
      scrollLock: true,
      scrollToSlide: 1,
      duration: 0.5,
    });

    const countScroll = glider.track.childElementCount;
    let nextItem = 1;

    const interval = setInterval(() => {
      glider.scrollItem(nextItem, true); // Desplazarse al siguiente ítem
      nextItem = nextItem + 1 == countScroll ? 0 : nextItem + 1;
    }, 7000); //

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero__slider glider">
        {
            heroContent.map(({image, title, text, button}, index) => (
                <div className="hero__slider--item" key={index}>
                    <picture className="hero__slider--picture">
                      <Image
                          src={image.url}
                          alt={image.alt}
                          width={1440}
                          height={600}
                          title={image.alt}
                          className="hero__slider--image"
                      ></Image>
                    </picture>
                    <div className="hero__slider--content">
                      <h2 className="hero__slider--title">{title}</h2>
                      <p className="hero__slider--text">{text}</p>
                      <a href={button.url} title={button.title} className="hero__slider--button button__primary">{button.title}</a>
                    </div>
                </div>
            ))
        }
      </div>
      <button className="hero__slider--arrow hero__slider--prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" stroke="#fff" fill="#fff"/></svg></button>
      <button className="hero__slider--arrow hero__slider--next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" stroke="#fff" fill="#fff"/></svg></button>
    </div>
  );
}
