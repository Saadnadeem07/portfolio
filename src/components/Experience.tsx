import { motion } from "framer-motion";

const Experience = () => {
  const skills = {
    "Full Stack Development": [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "Mongo DB",
    ],
    "Other Tools & Languages": ["Git", "Github", "C++", "SQL"],
  };

  return (
    <section id="experience" className="section">
      <p className="section-subtitle">Explore My</p>
      <h1 className="section-title">Experience</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
      >
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-2 gap-4">
              {items.map((skill) => (
                <motion.article
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <img
                    src="/assets/checkmark.png"
                    alt="Checkmark"
                    className="h-6 w-6"
                  />
                  <h3 className="text-lg">{skill}</h3>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
