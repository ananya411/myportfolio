export default function Skills() {
  const skills = [
    "Java", "C++", "React.js", "HTML", "CSS", 
    "JavaScript", "Spring Boot", "TailwindCSS"
  ];

  return (
    <section id="skills" className="py-24 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-5 text-lg font-medium bg-white shadow-md rounded-xl hover:scale-105 transition cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
