"use client";

import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Linkedin, Icon, MailIcon, PhoneIcon, Locate, LandmarkIcon } from "lucide-react";
import { Map } from "./Map";
export const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-6 w-6" />, link: "https://instagram.com/almatron.ai" },
    { name: "Twitter", icon: <Twitter className="h-6 w-6" />, link: "https://twitter.com" },
    { name: "Facebook", icon: <Facebook className="h-6 w-6" />, link: "https://facebook.com" },
    { name: "LinkedIn", icon: <Linkedin className="h-6 w-6" />, link: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-black text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold mb-4">ALMATRON 2025</h3>
            <p className="text-blue-100 mb-4">Think | Create | Innovate</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, icon, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {icon}
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Timeline", "Sponsor", "FAQ", "Gallery"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
  <h3 className="text-lg font-semibold mb-4">Contact</h3>
  <ul className="space-y-2 text-blue-200">
    <li className="flex items-center space-x-2">
      <MailIcon className="h-6 w-6" />
      <span>almatron@dsatm.edu.in</span>
    </li>
    <li className="flex items-center space-x-2">
      <PhoneIcon className="h-6 w-6" />
      <span>+91 9448732789</span>
    </li>
    <li className="flex items-center space-x-2">
      <PhoneIcon className="h-6 w-6" />
      <span>+91 9019966793</span>
    </li>
    <li className="flex items-center space-x-2">
      {/* <LandmarkIcon />
      <span>DSATM, Kanakpura road Bengaluru</span> */}
      <Map/>
    </li>
  </ul>
</div>


          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-blue-200 mb-4">Stay updated with the latest news and announcements.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-full text-white w-full focus:outline-gray-500"
              />
              <motion.button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </form>
          </div>
        </div>

        
        <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-200">
          <p>Made with 💖 by Team Almatron.</p>
        </div>
      </div>
    </footer>
  );
};

