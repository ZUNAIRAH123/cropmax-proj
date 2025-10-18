import React, { useState } from "react";

// Agar image public folder me hai
const cropmxLogo = "/cropmx__logo-removebg-preview.png";

const ContactForm = ({ onClose }) => {
    const [isFeedback, setIsFeedback] = useState(false);

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 bg-opacity-50 z-60">
            <div className="relative w-[700px] h-[400px] max-w-[95%] bg-white rounded-2xl shadow-2xl overflow-hidden flex">

                {/* Left Side (Contact Us Form) */}
                <div
                    className={` w-1/2 h-full p-8 transition-all duration-700 bg-[#f9fff5] ${isFeedback ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                        }`}
                >
                    <form className="flex flex-col items-center h-full justify-center text-center">
                        <h1 className="text-2xl font-bold mb-4 text-[#76b74e]">Contact Us</h1>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full my-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76b74e]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full my-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76b74e]"
                        />
                        <textarea
                            placeholder="Your Message"
                            required
                            className="w-full my-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76b74e]"
                            rows="4"
                        ></textarea>
                        <button
                            type="button"
                            onClick={() => setIsFeedback(true)}
                            className="mt-4 px-6 py-2 bg-[#000000] text-[#76b74e] rounded-full font-semibold hover:bg-black-600 transition"
                        >
                            Next → Feedback
                        </button>
                    </form>
                </div>

                {/* Right Side (Feedback Form) */}
                <div
                    className={`w-1/2 h-full p-8 transition-all duration-700 bg-green-400${isFeedback ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                        }`}
                >
                    <form className="flex flex-col items-center h-full justify-center text-center">
                        <h1 className="text-2xl font-bold mb-4 text-[#76b74e]">Feedback</h1>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full my-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76b74e]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full my-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76b74e]"
                        />
                        <textarea
                            placeholder="Your Feedback"
                            required
                            className="w-full my-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76b74e]"
                            rows="4"
                        ></textarea>
                        <button
                            type="button"
                            onClick={() => setIsFeedback(false)}
                            className="mt-4 px-6 py-2 bg-[#000000] text-[#76b74e] rounded-full font-semibold hover:bg-black-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 bg-black right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
                >
                    ✖
                </button>
            </div>
        </div>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center py-2">
                        <img
                            src={cropmxLogo}
                            alt="CropMX Logo"
                            width="120"
                            className="mb-2 mt-2"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Hamburger */}
                        <button
                            onClick={toggleSidebar}
                            className="text-[#76b74e] focus:outline-none bg-black"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        {/* Buttons - visible on sm+; on small screens they will appear in the sidebar */}
                        <button
                            onClick={() => setShowContact(true)}
                            className="hidden sm:inline-flex bg-[#000000] text-[#76b74e]  px-4 py-2 rounded-md shadow hover:bg-black-600 transition"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex justify-end p-4">
                        <button onClick={toggleSidebar} className="text-gray-700 bg-black ">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col space-y-4 px-6">
                        <a href="#" className="text-black hover:text-[#76b74e]">Home</a>
                        <a href="#" className="text-black hover:text-[#76b74e]">Products</a>
                        <a href="#" className="text-black hover:text-[#76b74e]">Partners</a>
                        <a href="#" className="text-black hover:text-[#76b74e]">Crops</a>
                        <a href="#" className="text-black hover:text-[#76b74e]">News</a>
                        <a href="#" className="text-black hover:text-[#76b74e]">About</a>

                        {/* Contact & Cart for small screens (appear inside sidebar) */}
                        <button
                            onClick={() => { setShowContact(true); setIsOpen(false); }}
                            className="sm:hidden mt-4 w-full text-left bg-black text-[#76b74e] px-4 py-2 rounded-md shadow hover:bg-black-600 transition"
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="sm:hidden w-full text-left bg-black text-[#76b74e] px-4 py-2 rounded-md shadow hover:bg-black-600 transition"
                        >
                            Cart
                        </button>
                    </div>
                </div>
            </nav>

            {/* Show ContactForm when Contact Us is clicked */}
            {showContact && <ContactForm onClose={() => setShowContact(false)} />}
        </>
    );
}
