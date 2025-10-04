import React, { useState, useEffect } from "react";

const slides = [
  { image: "/cover12.jpg" },
  { image: "/cover2.jpg" },
  { image: "/cover3.jpg" },
  { image: "/cover4.jpg" },
  { image: "/cover5.jpg" },
  { image: "/cover6.jpg" },
  { image: "/cover7.jpg" },
  { image: "/cover8.jpg" },
  { image: "/cover9.jpg" },
  { image: "/cover10.jpg" },
  { image: "/cover11.jpg" },
  { image: "/cover1.jpg" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={`Slide ${index}`}
          className={`absolute top-8 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}