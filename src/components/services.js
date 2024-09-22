import Image from "next/image";

// components/Services.js

export default function Services() {
  const servicesList = [
    {
      title: "Préstamos Personales",
      text: "Financiamiento para necesidades personales, como la consolidación de deudas, mejoras en el hogar o emergencias. Se otorgan con tasas de interés fijas o variables, y plazos que varían según el monto.",
      image: {
        alt: "Préstamos Personales",
        url: "/images/human.png",
      },
    },
    {
      title: "Tarjetas de Crédito",
      text: "Línea de crédito rotativa que permite realizar compras y pagos en plazos. Además, incluímos recompensas como puntos o cashback, y acceso a servicios adicionales como seguros y programas de beneficios.",
      image: {
        alt: "tarjeta de credito",
        url: "/images/business-card.png",
      },
    },
    {
      title: "Cuentas de Ahorro",
      text: "Son cuentas seguras que permiten guardar dinero y generar intereses con un riesgo mínimo. Tienes acceso rápido a los fondos y beneficios como retiros sin penalización.",
      image: {
        alt: "Cuentas de ahorro",
        url: "/images/coins.png",
      },
    },
    {
      title: "Préstamos para Autos",
      text: "Préstamos diseñados específicamente para financiar la compra de vehículos, con tasas competitivas y plazos ajustados para ayudar en la adquisición de un automóvil.",
      image: {
        alt: "tarjeta de credito",
        url: "/images/car.png",
      },
    },
    {
      title: "Cuentas de Ahorro a Plazo Fijo",
      text: "Ofrecen un mayor rendimiento que una cuenta de ahorro tradicional a cambio de mantener el dinero depositado por un período determinado. Con tasas de interés fijas y más atractivas.",
      image: {
        alt: "Cuenta de ahorro",
        url: "/images/piggy-bank.png",
      },
    },
    {
      title: "Préstamos para Estudiantes",
      text: "Financiamiento para cubrir los costos educativos, como matrícula, alojamiento y materiales. Suelen tener tasas de interés competitivas y opciones de pago diferidas hasta después de la graduación.",
      image: {
        alt: "Prestamos estudiantiles",
        url: "/images/laptop.png",
      },
    },
  ];
  return (
    <section id="services" className="services">
      <div className="container services__container">
        <h2 className="title services__title">
          Descubre todo lo que tenemos para ti
        </h2>
        <div className="services__grid">
          {servicesList.map(({ title, text, image }, index) => (
            <article key={index} className="services__card">
              <h3 className="services__card--title">{title}</h3>
              <p className="services__card--text">{text}</p>
              {image.url.length > 0 && (
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={180}
                  height={120}
                  loading="lazy"
                  title={image.alt}
                  className="services__card--image"
                ></Image>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
