import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-black/20 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">

        <h1 className="text-2xl font-bold tracking-wide">
          Ananya<span className="text-blue-400">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Skills</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        <div className="md:hidden cursor-pointer text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-black/90 text-white flex flex-col items-center gap-8 py-6">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}
