"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-950 via-gray-800 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-2xl text-primary font-bold">
            <FaLeaf />
            <span>Fare Farm</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Bringing you premium organic foods directly from nature.
            Pure, healthy, and trusted by families.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Products</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
            <li className="hover:underline cursor-pointer">Refund Policy</li>
            <li className="hover:underline cursor-pointer">Help Center</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
              <FaFacebookF />
            </a>
            <a className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
              <FaInstagram />
            </a>
            <a className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
              <FaTwitter />
            </a>
            <a className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-white/90">
          © {new Date().getFullYear()} Fare Farm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
