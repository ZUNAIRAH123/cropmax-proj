import React, { useState, useEffect } from "react";

const slides = [
    { image: "/cover12.jpg" },
    { image: "/cover2.jpg" },
    { image: "/cover3.jpg" },
    { image: "/cover4.jpg" },
   
];

export default function Slider() {
    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const interval = setInterval(
            () => setCurrent((prev) => (prev + 1) % slides.length),
            3000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mt-[70px] overflow-hidden grid">
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={`Slide ${index}`}
                    className={`
                        col-start-1 row-start-1 w-full 
                        object-contain transition-opacity duration-1000 
                        ${index === current
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }
                    `}
                />
            ))}


            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${index === current ? "bg-white scale-125" : "bg-gray-400"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}