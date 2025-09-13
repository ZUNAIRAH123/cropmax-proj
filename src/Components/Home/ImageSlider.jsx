import React, { useState, useEffect } from "react";

const slides = [
    {
        image: "/Bul.png",
        title: "Nature’s Beauty",
        description: "Explore the serene landscapes and enjoy peaceful moments.",
    },
    {
        image: "/Booster.png",
        title: "Wild Forest",
        description: "Discover the hidden gems deep inside the forest.",
    },
    {
        image: "/Convervex.png",
        title: "Sunset Vibes",
        description: "Feel the warmth of golden rays at dusk.",
    },
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
        <div className="w-full flex items-center justify-center bg-gray-100 py-8 mt-[64px]">
            <div className="flex flex-col md:flex-row w-[90%] max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-white">

                
                <div className="w-full md:w-2/3 flex items-center justify-center p-6">
                    <div className="relative w-[80%]" style={{ aspectRatio: '1/1', maxWidth: 800, maxHeight: '80%' }}>
                        <img
                            src={slides[current].image}
                            alt={slides[current].title}
                            className="absolute w-[85%] h-[85%] object-cover rounded-lg opacity-60 transform rotate-[5deg] blur-sm"
                        />
                        <img
                            src={slides[current].image}
                            alt={slides[current].title}
                            className="relative w-full h-full object-cover rounded-lg shadow-2xl transform rotate-[-5deg]"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800 transition-all duration-700">
                        {slides[current].title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-700">
                        {slides[current].description}
                    </p>
                </div>
            </div>
        </div>
    );
}

