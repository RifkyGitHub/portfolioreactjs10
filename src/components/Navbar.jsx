import smile from "../assets/smile.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full font-bold text-black shadow">
            <img src={smile} alt="" />
          </div>
          <span className="font-extrabold text-lg">Rfky</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4 font-medium text-center">
          <a href="#" className="block hover:text-yellow-400">Home</a>
          <a href="#about" className="block hover:text-yellow-400">About</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
