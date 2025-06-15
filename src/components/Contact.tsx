import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: "/assets/email.png",
      text: "saadnadeem07@gmail.com",
      link: "mailto:saadnadeem07@gmail.com",
    },
    {
      icon: "/assets/linkedin.png",
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/saadnadeem07/",
    },
    {
      icon: "/assets/github.png",
      text: "GitHub",
      link: "https://github.com/Saadnadeem07",
    },
  ];

  return (
    <section id="contact" className="section">
      <p className="section-subtitle">Get In Touch</p>
      <h1 className="section-title">Contact Me</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.text}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            >
              <img src={info.icon} alt={info.text} className="h-8 w-8 mb-4" />
              <p className="text-gray-600">{info.text}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Feel free to reach out to me for any opportunities or just to say
            hi!
          </p>
          <button
            className="btn btn-primary"
            onClick={() =>
              (window.location.href = "mailto:saadnadeem07@gmail.com")
            }
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
