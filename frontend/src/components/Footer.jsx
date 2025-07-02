import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Enigma Technical Club</h2>
          <p className="text-sm text-gray-200 mb-4">
            A student-led club dedicated to fostering innovation,
            collaboration, and technical excellence among passionate students.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/enigma_aimt/?hl=en" className="text-white hover:text-gray-300 text-xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/enigmaaimt/?viewAsMember=true" className="text-white hover:text-gray-300 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://chat.whatsapp.com/DYUbtj4sRBB5f7BKZi5k0F" className="text-white hover:text-gray-300 text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/members" className="hover:text-white">Our Team</a></li>
            <li><a href="/gallery" className="hover:text-white">Photo Gallery</a></li>
            <li><a href="/admin/login" target="blank">Login</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Ambalika Institute of Management and Technology, Lucknow</li>
            <li>enigmaclub123@gmail.com</li>
            <li>+91 8877213461</li>
          </ul>
        </div>
      </div>
      <hr className="w-full bg-gray-500 mt-5"/>
      <div>
        <p className="text-center text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Enigma Technical Club. All rights reserved. | Developed by Web Development Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
