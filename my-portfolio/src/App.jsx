import React from "react";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Hi, I'm <span className="text-cyan-300 drop-shadow-[0_0_10px_#22d3ee]">Ananya Jaiswal</span>
      </h1>

      <p className="mt-4 text-lg md:text-2xl text-cyan-200">
        Full-Stack Developer | Cloud Enthusiast | Problem Solver
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-lg text-lg font-medium transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-400 hover:border-indigo-200 rounded-lg text-lg font-medium transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
