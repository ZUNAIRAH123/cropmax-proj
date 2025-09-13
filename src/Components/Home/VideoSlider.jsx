import React, { useState } from "react";

// local video import
import movBbb from "/mov_bbb.mp4";
import v2 from "/movie.mp4";
import v3 from "/sample-5s.mp4";
import v4 from "/sample-10s.mp4";

const videos = [movBbb, v2, v3, v4];

export default function VideoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // function to go to next video when current ends
    const handleVideoEnd = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const goPrev = () => setCurrentIndex((p) => (p - 1 + videos.length) % videos.length);
    const goNext = () => setCurrentIndex((p) => (p + 1) % videos.length);

    return (
        <div className="px-4 py-6 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                    <video
                        key={currentIndex}
                        src={videos[currentIndex]}
                        controls
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />

                    {/* Desktop overlay arrows */}
                    <div className="hidden md:flex absolute inset-y-0 left-0 items-center">
                        <button
                            onClick={goPrev}
                            aria-label="Previous"
                            className="ml-2 bg-white/80 hover:bg-white px-2 py-1 rounded-full shadow"
                        >
                            ◀
                        </button>
                    </div>
                    <div className="hidden md:flex absolute inset-y-0 right-0 items-center">
                        <button
                            onClick={goNext}
                            aria-label="Next"
                            className="mr-2 bg-white/80 hover:bg-white px-2 py-1 rounded-full shadow"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row items-center gap-3">
                <div className="flex gap-2">
                    <button onClick={goPrev} className="px-3 py-1 bg-[#76b74e] text-black rounded-md text-sm">Prev</button>
                    <button onClick={goNext} className="px-3 py-1 bg-[#76b74e] text-black rounded-md text-sm">Next</button>
                </div>

                <span className="text-sm text-gray-700">Video {currentIndex + 1} of {videos.length}</span>
            </div>
        </div>
    );
}
