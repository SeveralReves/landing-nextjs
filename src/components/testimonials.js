"use client";
import Image from "next/image";
import { useState } from "react";

// components/testimonials.js

export default function Testimonials() {
  const [indexActive, setIndexActive] = useState(0);

  const currentIndex = (index) =>{
    let newIndex = '';
    if(index == indexActive){
        newIndex = 'active'
    }else if(index + 1 == indexActive || index - 1 == indexActive ){
        newIndex = 'adjacent'
    }else if(index + 2 == indexActive || index - 2 == indexActive ){
        newIndex = 'superadjacent'
    }else if(index + 3 == indexActive || index - 3 == indexActive ){
        newIndex = 'subadjacent'
    }
    return newIndex;
  } 
  const testimonialsList = [
    {
      name: "Maria Perez",
      star: 3.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium facere fuga adipisci explicabo officia, corporis est autem nihil nostrum. Modi eveniet voluptate aut veritatis deleniti maiores aspernatur facere eaque.",
      image: {
        alt: "Testimonio 1",
        url: "/images/Testimonial-1.jpg",
      },
    },
    {
      name: "Jean Franco Colon",
      star: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium facere fuga adipisci explicabo officia, corporis est autem nihil nostrum. Modi eveniet voluptate aut veritatis deleniti maiores aspernatur facere eaque.",
      image: {
        alt: "Testimonio 2",
        url: "/images/Testimonial-2.jpg",
      },
    },
    {
      name: "Alfonso Martinez",
      star: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium facere fuga adipisci explicabo officia, corporis est autem nihil nostrum. Modi eveniet voluptate aut veritatis deleniti maiores aspernatur facere eaque.",
      image: {
        alt: "Testimonio 3",
        url: "/images/Testimonial-3.jpg",
      },
    },
    {
      name: "Maria Fernanda Juarez",
      star: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium facere fuga adipisci explicabo officia, corporis est autem nihil nostrum. Modi eveniet voluptate aut veritatis deleniti maiores aspernatur facere eaque.",
      image: {
        alt: "Testimonio 4",
        url: "/images/Testimonial-4.jpg",
      },
    },
    {
      name: "Scarlet Vivas",
      star: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium facere fuga adipisci explicabo officia, corporis est autem nihil nostrum. Modi eveniet voluptate aut veritatis deleniti maiores aspernatur facere eaque.",
      image: {
        alt: "Testimonio 5",
        url: "/images/Testimonial-5.jpg",
      },
    },
    // {
    //   name: "Javier Ubago",
    //   star: 5,
    //   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium facere fuga adipisci explicabo officia, corporis est autem nihil nostrum. Modi eveniet voluptate aut veritatis deleniti maiores aspernatur facere eaque.",
    //   image: {
    //     alt: "Testimonio 6",
    //     url: "/images/Testimonial-6.jpg",
    //   },
    // },
  ];
  return (
    <section id="testimonials" className="testimonials">
      <div className="container testimonials__container">
        <h2 className="title testimonials__title">
          Escucha lo que otros dicen
        </h2>
        <div className="testimonials__grid">
          {testimonialsList.map(({ name, text, image, star }, index) => (
            <article
              key={index}
              className={`testimonials__card ${currentIndex(index)}`}
            >
              <h3 className="testimonials__card--name">{name}</h3>
              <p className="testimonials__card--text">{text}</p>
              <div className="testimonials__card--star">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    height="10px"
                    width="10px"
                    viewBox="0 0 47.94 47.94"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starIndex < star ? "#ED8A19" : "#ffffff"} // Colorea según la cantidad de estrellas
                  >
                    <path
                      style={{
                        fill: starIndex < star ? "#ED8A19" : "#ffffff",
                        stroke: starIndex < star ? "none" : "#000000",
                        strokeWidth: "1",
                      }}
                      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 
              c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 
              c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 
              c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 
              c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 
              C22.602,0.567,25.338,0.567,26.285,2.486z"
                    />
                  </svg>
                ))}
              </div>
              {image.url.length > 0 && (
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={50}
                  height={50}
                  loading="lazy"
                  title={image.alt}
                  className="testimonials__card--image"
                ></Image>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
