export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex justify-center items-center text-center bg-gradient-to-br from-gray-900 to-black text-white px-6"
    >
      <div>
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-400">Ananya</span>
        </h1>

        <p className="text-xl opacity-80 mb-6">
          Full Stack Developer • React • Java • Spring Boot
        </p>

        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-500 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
