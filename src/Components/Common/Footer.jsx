import React from "react";
import cropmxLogo from "/cropmx__logo-removebg-preview.png";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700">
      {/* Top Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b">
        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="text-[#76B74E] text-2xl" />
          <div>
            <h4 className="font-semibold">Address</h4>
            <p className="text-sm">
              36 – H, Club Road, Vehari 61100 (Punjab) Pakistan
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <FaPhoneAlt className="text-[#76B74E] text-2xl" />
          <div>
            <h4 className="font-semibold">Phone:</h4>
            <p className="text-sm">+92 333 6647224</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <FaClock className="text-[#76B74E] text-2xl" />
          <div>
            <h4 className="font-semibold">Opening hours</h4>
            <p className="text-sm">9:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left ">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={cropmxLogo}
            alt="Company Logo"
            className="h-32 object-contain" // h-20 → h-28
          />
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Top Categories</h2>
          <ul className="space-y-2 text-sm">
            <li>In Season</li>
            <li>Sesame Seeds</li>
            <li>Spring Hybrid Corn Seed</li>
            <li>Hybrid Corn Seed for Silage</li>
            <li>Mustard Seed</li>
            <li>Wheat Seed</li>
            <li>Fodders</li>
            <li>Hybrid Rice Seed</li>
            <li>Aromatic Rice Seed</li>
            <li>Autumn Hybrid Corn Seed</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li>www.cscv.pk</li>
            <li>imdadseed@gmail.com</li>
            <li>facebook.com/chatthaseed</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Company</h2>
          <ul className="space-y-2 text-sm">
            <li>+92 333 6647224</li>
            <li>+92 300 7721318</li>
            <li>+92 300 8990123</li>
            <li>Support: 24/7</li>
            <li>36 – H, Club Road, Vehari 61100 (Punjab) Pakistan</li>
          </ul>
        </div>
      </div>
      {/* Social Icons */}
      <div className="border-t max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center ">
        <div className="flex space-x-4 text-xl">
          <a href="#">
            <FaFacebookF className="text-[#76B74E]" />
          </a>
          <a href="#">
            <FaInstagram className="text-[#76B74E]" />
          </a>
          <a href="#">
            <FaWhatsapp className="text-[#76B74E]" />
          </a>
          <a href="#">
            <FaYoutube className="text-[#76B74E]" />
          </a>
        </div>
        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          ©2025 ChattaSeed Corporation All rights reserved.
        </p>
        <p>
          <b>Powered By: ©BizCode</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
