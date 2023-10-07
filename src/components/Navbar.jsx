import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import About from "./About";
import Company from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(true);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeNav();
    }
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black bg-white">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-4xl font-bold text-black font-[Micaroline]">COLOSSAL</h1>
        <p className="text-sm md:text-sm font-bold text-gradient-to-r">COMMUNICATIONS</p>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 hover:cursor-pointer">Home</li>
        <li
          className="p-4 hover:cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About
        </li>
        <li
          className="p-4 hover:cursor-pointer"
          onClick={() => scrollToSection("services")}
        >
          Services
        </li>
        <li
          className="p-4 hover:cursor-pointer"
          onClick={() => scrollToSection("testimonials")}
        >
          Testimonials
        </li>
        <li
          className="p-4 hover:cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500 z-50"
            : "fixed left-[-100%] z-0"
        }
      >
        <div className="flex flex-col justify-center items-center m-2 mt-4">
          <h1 className="text-3xl text-black font-[Micaroline]">COLOSSAL</h1>
          <p className="text-sm font-bold text-gradient-to-r">COMMUNICATIONS</p>
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
            Home
          </li>
          <li
            className="p-4 border-b border-gray-600 hover:cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="p-4 border-b border-gray-600 hover:cursor-pointer"
            onClick={() => scrollToSection("services")}
          >
            Services
          </li>
          <li
            className="p-4 border-b border-gray-600 hover:cursor-pointer"
            onClick={() => scrollToSection("testimonials")}
          >
            Testimonials
          </li>
          <li
            className="p-4 hover:cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
