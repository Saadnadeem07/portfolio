import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-around items-center h-17vh">
        <div className="text-3xl font-semibold">Saad Nadeem</div>
        <ul className="flex gap-8 text-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-black hover:text-gray-600 hover:underline hover:underline-offset-4 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex justify-between items-center p-4">
        <div className="text-2xl font-semibold">Saad Nadeem</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-16 right-0 bg-white w-full shadow-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-center text-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
