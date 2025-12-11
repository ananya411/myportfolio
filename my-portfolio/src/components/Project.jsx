export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern React + Tailwind portfolio.",
    },
    {
      title: "E-Commerce Store",
      desc: "React frontend + Spring Boot backend.",
    },
    {
      title: "Chat App",
      desc: "Real-time messaging with Socket.io.",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="opacity-80">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
