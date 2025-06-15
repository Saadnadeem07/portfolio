import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="profile"
      className="flex justify-center items-center gap-20 h-[80vh]"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex h-[400px] w-[400px]"
      >
        <img
          src="/assets/profile-pic.png"
          alt="Saad Nadeem profile picture"
          className="rounded-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-gray-600 font-semibold">Hello, I'm</p>
        <h1 className="text-5xl font-bold my-2">Saad Nadeem</h1>
        <p className="text-2xl text-gray-600 mb-4">Full Stack Developer</p>

        <div className="flex justify-center gap-4 mb-4">
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/saadnadeem07/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/assets/linkedin.png"
              alt="LinkedIn"
              className="h-8 w-8"
            />
          </a>
          <a
            href="https://github.com/Saadnadeem07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src="/assets/github.png" alt="GitHub" className="h-8 w-8" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
