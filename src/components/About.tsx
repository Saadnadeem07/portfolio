import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <p className="section-subtitle">Get To Know More</p>
      <h1 className="section-title">About Me</h1>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src="/assets/saad1.png"
            alt="Profile picture"
            className="rounded-lg w-full max-w-md mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/assets/experience.png"
                  alt="Experience icon"
                  className="h-8 w-8"
                />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="text-gray-600">
                Software Engineer Fellow @ Headstarter AI
                <br />
                <br />
                Full Stack Developer
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/assets/education.png"
                  alt="Education icon"
                  className="h-8 w-8"
                />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-600">
                BS Computer Science from FAST NUCES
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 leading-relaxed">
              I am Muhammad Saad Nadeem, a Computer Science student at
              FAST-NUCES 🇵🇰 (Batch '21), with a strong passion for software
              development. Currently, I am a Software Engineering Fellow at
              HeadStarter AI 🇺🇸 and learning to become a MERN Stack Developer.
              <br />
              <br />I have a solid foundation in computer science principles and
              practical experience with various programming languages, including
              C, C++, C#, SQL, Python, and the MERN Stack. My academic projects
              have honed my problem-solving skills and ability to work
              effectively both independently and in teams.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="h-8 w-8 mx-auto mt-8 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
};

export default About;
