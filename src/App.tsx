import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaMedium, FaLink } from "react-icons/fa";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  User,
  Code,
  Database,
  Server,
  Cloud,
  Brain,
  Globe,
  ArrowUp,
  FileText,
  Award,
} from "lucide-react";

import profileImage from "./assets/profile.jpeg";
import resumePDF from "./assets/resume.pdf";
// Import project images
import projectImg1 from "./assets/1.png";
import projectImg2 from "./assets/2.png";
import projectImg3 from "./assets/3.png";
import projectImg4 from "./assets/4.png";
import projectImg5 from "./assets/5.jpg";
import projectImg6 from "./assets/6.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("All Skills");

  const projects = [
    {
      id: 1,
      title: "NeuroAssess FYP",
      description:
        "AI-Assisted platform for supporting neurodivergent students with dyslexia and dysgraphia automating detailed reports for users and psychiatrists to support personalized learning.",
      image: projectImg1,
      technologies: [
        "MERN Stack",
        "Python",
        "OpenCV",
        "Hugging Face",
        "Gemini",
        "Docker",
      ],
      codeUrl: "https://github.com/Saadnadeem07/NeuroAssess-FYP",
    },
    {
      id: 2,
      title: "RAG-based Clinical Diagnostic System",
      description:
        "Retrieval-Augmented Generation system for clinical diagnostics using LangChain and various language models.",
      image: projectImg2,
      technologies: [
        "Python",
        "LangChain",
        "FAISS",
        "Streamlit",
        "BART",
        "Flan-T5",
      ],
      codeUrl:
        "https://github.com/Saadnadeem07/RAG-based-Clinical-Diagnostic-System",
    },
    {
      id: 3,
      title: "Containerized Web Application with CI/CD",
      description:
        "First project exploring containerization of web applications using Docker and implementing CI/CD pipelines for automated deployment workflows.",
      image: projectImg3,
      technologies: ["Docker", "Docker Compose", "CI/CD"],
      codeUrl: "https://github.com/Saadnadeem07/dockerized-webapp-ci-cd",
    },
    {
      id: 4,
      title: "Advanced Kubernetes Deployment with GitOps, Helm & Service Mesh",
      description:
        "Designed and deployed a multi-service containerized web application on Kubernetes with environment-specific ConfigMaps, Secrets, health probes, and resource limits across dev and prod clusters.",
      image: projectImg4,
      technologies: ["Docker", "Kubernetes", "ArgoCD", "GitOps"],
      codeUrl: "https://github.com/Saadnadeem07/dockerized-webapp-ci-cd",
    },
    {
      id: 5,
      title: "Phishing Email Detection System",
      description:
        "Designed and developed an intelligent system that accurately classifies emails as phishing or legitimate by analyzing subject lines and content. It enhances email security by extracting key patterns and features from text, enabling precise detection and protection against phishing attempts.",
      image: projectImg5,
      technologies: [
        "Python",
        "FastAPI",
        "Scikit-learn",
        "TensorFlow",
        "React",
        "PostgreSQL",
      ],
      codeUrl:
        "https://github.com/Saadnadeem07/Phishing-Email-Detection-System",
    },
    {
      id: 6,
      title: "Social Media Sentiment Analysis",
      description:
        " Analyzed Facebook and Instagram comments on a fashion product using cardiffnlp/twitter-roberta-base-sentiment, identifying key sentiment drivers and visualizing trends to extract actionable customer insights.",
      image: projectImg6,
      technologies: ["Python", " Transformers", "Apify", "Seaborn "],
      codeUrl:
        "https://github.com/Saadnadeem07/SentimentAnalysis-CustomerFeedback",
    },
  ];

  const skillCategories = [
    { name: "All Skills", icon: Code },
    { name: "Languages", icon: Code },
    { name: "Web", icon: Globe },
    { name: "Data", icon: Database },
    { name: "DevOps", icon: Server },
    { name: "Cloud", icon: Cloud },
    { name: "AI & ML", icon: Brain },
  ];

  const allSkills = [
    // Languages
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "SQL", category: "Languages" },

    // Web
    { name: "HTML/CSS", category: "Web" },
    { name: "React.js", category: "Web" },
    { name: "Node.js", category: "Web" },
    { name: "Express.js", category: "Web" },
    { name: "MongoDB", category: "Web" },
    { name: "MERN Stack", category: "Web" },
    { name: "Tailwind CSS", category: "Web" },

    // Data
    { name: "FastAPI", category: "Data" },
    { name: "Flask", category: "Data" },
    { name: "REST APIs", category: "Data" },
    { name: "MongoDB", category: "Data" },
    { name: "MySQL", category: "Data" },
    { name: "PostgreSQL", category: "Data" },
    { name: "SQL & NoSQL", category: "Data" },
    { name: "Pandas", category: "Data" },
    { name: "NumPy", category: "Data" },
    { name: "Data Analysis", category: "Data" },
    { name: "Git", category: "Data" },
    { name: "GitHub", category: "Data" },
    { name: "GitLab", category: "Data" },

    // DevOps
    { name: "Docker", category: "DevOps" },
    { name: "Docker Compose", category: "DevOps" },
    { name: "GitHub Actions", category: "DevOps" },
    { name: "GitOps", category: "DevOps" },
    { name: "CI/CD", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "ArgoCD", category: "DevOps" },
    { name: "Jenkins", category: "DevOps" },

    // Cloud
    { name: "AWS", category: "Cloud" },
    { name: "Google Cloud Platform", category: "Cloud" },
    { name: "Terraform", category: "Cloud" },
    { name: "Cloud Deployments", category: "Cloud" },

    // AI & ML
    { name: "Serverless", category: "AI & ML" },
    { name: "TensorFlow", category: "AI & ML" },
    { name: "PyTorch", category: "AI & ML" },
    { name: "Scikit-learn", category: "AI & ML" },
    { name: "OpenCV", category: "AI & ML" },
    { name: "Hugging Face", category: "AI & ML" },
    { name: "OpenAI APIs", category: "AI & ML" },
    { name: "LangChain", category: "AI & ML" },
    { name: "RAG", category: "AI & ML" },
    { name: "Computer Vision", category: "AI & ML" },
  ];

  const certifications = [
    "Introduction to DevOps | IBM (Coursera)",
    "Git: Become an Expert in Git & GitHub | Udemy",
    "Google Prompting Essentials Specialization | Coursera",
    "Google AI Essentials Specialization | Coursera",
  ];

  const getFilteredSkills = () => {
    if (activeSkillCategory === "All Skills") {
      return allSkills;
    }
    return allSkills.filter((skill) => skill.category === activeSkillCategory);
  };

  return (
    <div className="min-h-screen bg-[#0F111A] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#7B61FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#A3AED0] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#7B61FF] rounded-full blur-2xl"></div>
      </div>

      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-1/4 w-2 h-16 bg-[#7B61FF] rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-20 bg-[#A3AED0] rotate-12 opacity-15"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-12 bg-[#7B61FF] -rotate-45 opacity-25"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#7B61FF] to-[#A3AED0] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">
              Saad Nadeem
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-[#CBD5E1] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a
              href="#projects"
              className="text-[#CBD5E1] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              <span className="relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a
              href="#experience"
              className="text-[#CBD5E1] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              <span className="relative">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a
              href="#skills"
              className="text-[#CBD5E1] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              <span className="relative">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a
              href="#contact"
              className="text-[#CBD5E1] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </div>

          {/* Social Icons with Colorful Backgrounds - Top Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Saadnadeem07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#24292e] hover:bg-[#1b1f23] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
            >
              <Github className="w-5 h-5 group-hover:text-[#7B61FF]" />
            </a>
            <a
              href="https://www.linkedin.com/in/saadnadeem07/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0077B5] hover:bg-[#005f8d] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-[#7B61FF]" />
            </a>
            <a
              href="https://medium.com/@saadnadeem07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-black hover:bg-[#333] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
            >
              <svg
                className="w-5 h-5 group-hover:text-[#7B61FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
            <a
              href="https://linktr.ee/saadnadeem07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#39E09B] hover:bg-[#2bc88d] text-black font-semibold transition-all duration-300 hover:scale-110 hover:rotate-12 group"
            >
              <FaLink className="w-5 h-5 group-hover:text-[#7B61FF]" />
            </a>
            <a
              href="mailto:saadnadeem5509@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#EA4335] hover:bg-[#d33426] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
            >
              <Mail className="w-5 h-5 group-hover:text-[#7B61FF]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#A3AED0] hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F111A]/95 backdrop-blur-lg border-t border-[#A3AED0]/10">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#about"
                className="block text-[#CBD5E1] hover:text-white transition-all duration-300 relative group"
              >
                <span className="relative">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a
                href="#projects"
                className="block text-[#CBD5E1] hover:text-white transition-all duration-300 relative group"
              >
                <span className="relative">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a
                href="#experience"
                className="block text-[#CBD5E1] hover:text-white transition-all duration-300 relative group"
              >
                <span className="relative">
                  Experience
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a
                href="#skills"
                className="block text-[#CBD5E1] hover:text-white transition-all duration-300 relative group"
              >
                <span className="relative">
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a
                href="#contact"
                className="block text-[#CBD5E1] hover:text-white transition-all duration-300 relative group"
              >
                <span className="relative">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Social Icons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-[#A3AED0]/10">
              <a
                href="https://github.com/Saadnadeem07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#24292e] hover:bg-[#1b1f23] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Github className="w-5 h-5 group-hover:text-[#7B61FF]" />
              </a>
              <a
                href="https://www.linkedin.com/in/saadnadeem07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0077B5] hover:bg-[#005f8d] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-[#7B61FF]" />
              </a>
              <a
                href="https://medium.com/@saadnadeem07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-black hover:bg-[#333] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <svg
                  className="w-5 h-5 group-hover:text-[#7B61FF]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a
                href="https://linktr.ee/saadnadeem07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#39E09B] hover:bg-[#2bc88d] text-black font-semibold transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <FaLink className="w-5 h-5 group-hover:text-[#7B61FF]" />
              </a>
              <a
                href="mailto:saadnadeem5509@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#EA4335] hover:bg-[#d33426] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Mail className="w-5 h-5 group-hover:text-[#7B61FF]" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* Name */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Saad Nadeem
                </h1>

                {/* Subtitle */}
                <div className="mt-2 text-[#7B61FF] text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  <p>Full-Stack Developer</p>
                  <p>DevOps & Cloud Enthusiast</p>
                </div>
              </div>

              <div className="space-y-4 text-[#CBD5E1] text-lg leading-relaxed max-w-md">
                <p>
                  <span className="text-white font-medium">
                    Aspiring Software Engineer passionate about building
                    scalable web apps using the{" "}
                    <span className="font-bold text-[#7B61FF]">MERN</span>{" "}
                    stack, automating infrastructure with{" "}
                    <span className="font-bold text-[#7B61FF]">DevOps</span>{" "}
                    tools, and deploying reliable{" "}
                    <span className="font-bold text-[#7B61FF]">
                      cloud-native
                    </span>{" "}
                    solutions.
                  </span>
                </p>
              </div>

              {/* Email Form */}
              <div className="flex flex-col gap-4 mt-6">
                {/* First Row */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Saadnadeem07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#24292e] hover:bg-[#1b1f23] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7B61FF]/10 hover:scale-105 hover:border hover:border-[#7B61FF]/30 group"
                  >
                    <FaGithub className="text-xl group-hover:text-[#7B61FF] transition-colors duration-300" />
                    <span className="font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/saadnadeem07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] hover:bg-[#005f8d] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7B61FF]/10 hover:scale-105 hover:border hover:border-[#7B61FF]/30 group"
                  >
                    <FaLinkedin className="text-xl group-hover:text-[#7B61FF] transition-colors duration-300" />
                    <span className="font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href={resumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#7B61FF] hover:bg-[#6A4FE6] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7B61FF]/10 hover:scale-105 hover:border hover:border-[#7B61FF]/30 group"
                  >
                    <FileText className="text-xl group-hover:text-white transition-colors duration-300" />
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      View Resume
                    </span>
                  </a>
                </div>

                {/* Second Row */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:saadnadeem5509@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#EA4335] hover:bg-[#d33426] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7B61FF]/10 hover:scale-105 hover:border hover:border-[#7B61FF]/30 group"
                  >
                    <Mail className="text-xl group-hover:text-[#7B61FF] transition-colors duration-300" />
                    <span className="font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                      Gmail
                    </span>
                  </a>

                  <a
                    href="https://medium.com/@saadnadeem07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-[#333] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7B61FF]/10 hover:scale-105 hover:border hover:border-[#7B61FF]/30 group"
                  >
                    <FaMedium className="text-xl group-hover:text-[#7B61FF] transition-colors duration-300" />
                    <span className="font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                      Medium
                    </span>
                  </a>

                  <a
                    href="https://linktr.ee/saadnadeem07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#39E09B] hover:bg-[#2bc88d] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7B61FF]/10 hover:scale-105 hover:border hover:border-[#7B61FF]/30 group"
                  >
                    <FaLink className="text-xl group-hover:text-[#7B61FF] transition-colors duration-300" />
                    <span className="group-hover:text-[#7B61FF] transition-colors duration-300">
                      Linktree
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full max-w-[400px] mx-auto aspect-[3/4] bg-gradient-to-br from-[#1A1D29] to-[#0F111A] rounded-2xl border border-[#A3AED0]/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Saad Nadeem - Full Stack & DevOps Engineer"
                    className="w-full h-full object-cover object-center rounded-2xl"
                    style={{
                      objectPosition: "center top", // Adjust this if needed: 'center', 'top', 'bottom'
                    }}
                  />
                  {/* Optional: Add a subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A]/20 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#7B61FF]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#A3AED0]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features/Services Cards */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Full-Stack Development */}
            <div className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group">
              <div className="w-12 h-12 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#7B61FF]/30 transition-all duration-300">
                <Code className="w-6 h-6 text-[#7B61FF] group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#7B61FF] transition-colors duration-300">
                Full-Stack Development
              </h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Crafting responsive user interfaces and scalable backend systems
                using React, Node.js, and MongoDB — ensuring clean architecture
                and seamless data flow.
              </p>
            </div>

            {/* DevOps & Automation */}
            <div className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group">
              <div className="w-12 h-12 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#7B61FF]/30 transition-all duration-300">
                <Server className="w-6 h-6 text-[#7B61FF] group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#7B61FF] transition-colors duration-300">
                DevOps & Automation
              </h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Implementing CI/CD pipelines and containerized workflows using
                tools like Docker, Kubernetes, Argo CD, and GitHub Actions for
                efficient and reliable delivery.
              </p>
            </div>

            {/* Cloud-Native Deployments */}
            <div className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group">
              <div className="w-12 h-12 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#7B61FF]/30 transition-all duration-300">
                <Cloud className="w-6 h-6 text-[#7B61FF] group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#7B61FF] transition-colors duration-300">
                Cloud-Native Deployments
              </h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Deploying and managing secure, scalable applications in the
                cloud using AWS services like EC2 and Terraform-based
                infrastructure as code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-[#7B61FF]">Projects</span>
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
              Explore my recent work showcasing AI integration, full-stack
              development, and cloud solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl overflow-hidden hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A]/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#7B61FF] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[#CBD5E1] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#7B61FF]/20 text-[#A3AED0] text-xs rounded-full border border-[#7B61FF]/30 hover:bg-[#7B61FF]/40 hover:text-white hover:scale-105 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#A3AED0] hover:text-white hover:scale-105 transition-all duration-200 text-sm font-medium group"
                    >
                      <Code className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-transparent border-2 border-[#7B61FF] text-[#7B61FF] hover:bg-[#7B61FF] hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#7B61FF]/25">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────── */}
      {/* Experience & Education Section */}
      <div id="experience" className="relative z-10 px-6 py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-400 underline decoration-purple-400 underline-offset-8">
            Experience & Education
          </h2>
          <p className="mt-4 text-[#CBD5E1] text-lg">
            My academic journey and professional experiences that shaped my
            expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline vertical line and dots */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 w-0.5 h-full bg-[#7B61FF]/40 z-0" />
            {/* First dot before Bachelor */}
            <div className="absolute left-3 top-8 w-6 h-6 rounded-full bg-[#181B29] border-2 border-[#7B61FF] flex items-center justify-center z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7B61FF]" />
            </div>
            {/* Bachelor Card */}
            <div className="ml-16 bg-gradient-to-br from-[#1e1e2e] to-[#1a1d29] border border-[#A3AED0]/10 rounded-xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group mb-8">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="text-white font-semibold text-xl group-hover:text-[#7B61FF] transition-colors duration-300">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-purple-400 mt-1 group-hover:text-[#A3AED0] transition-colors duration-300">
                    FAST National University of Computer and Emerging Sciences
                  </p>
                </div>
                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-medium mt-2 sm:mt-0 group-hover:bg-[#7B61FF]/30 group-hover:text-white transition-all duration-300">
                  Sep 2021 - Jun 2025
                </span>
              </div>

              <ul className="list-disc list-inside text-[#CBD5E1] mt-3 text-sm space-y-2 leading-relaxed">
                <li>
                  Graduated with a{" "}
                  <strong>Bachelor's degree in Computer Science</strong> from{" "}
                  <strong>FAST NUCES</strong>
                </li>
                <li>
                  Specialized in <strong>Full-Stack Web Development</strong>{" "}
                  using the <strong>MERN stack</strong>
                </li>
                <li>
                  Hands-on experience with <strong>DevOps tools</strong> like
                  Docker, Kubernetes, GitHub Actions, and Terraform
                </li>
                <li>
                  Skilled in{" "}
                  <strong>Cloud-Native Development & Deployment</strong>,
                  primarily on <strong>AWS</strong>
                </li>
                <li>
                  Developed a{" "}
                  <strong>foundational understanding of AI/ML</strong>,
                  including hands-on exposure to <strong>NLP</strong> and{" "}
                  <strong>Generative AI</strong>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    OOP
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    DSA
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    DBMS
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    OS
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    Software Design & Analysis
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    MERN Stack
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    DevOps (Docker, CI/CD, Terraform)
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    Cloud (AWS EC2/S3, Basic Infra)
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    NLP (Foundational)
                  </span>
                  <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                    Generative AI (Introductory)
                  </span>
                </div>
              </div>
            </div>
            {/* Second dot before NeuroAssess */}
            <div className="absolute left-3 top-[24rem] w-6 h-6 rounded-full bg-[#181B29] border-2 border-[#7B61FF] flex items-center justify-center z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7B61FF]" />
            </div>
            {/* NeuroAssess Card */}
            <div className="ml-16 bg-gradient-to-br from-[#1e1e2e] to-[#1a1d29] border border-[#A3AED0]/10 rounded-xl p-6 shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group mb-8">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="text-white font-semibold text-xl group-hover:text-[#7B61FF] transition-colors duration-300">
                    NeuroAssess – AI-Assisted Support for Neurodivergent
                    Students (FYP)
                  </h3>

                  <ul className="list-disc list-inside text-[#CBD5E1] mt-3 text-sm space-y-2 leading-relaxed">
                    <li>
                      Co-developed and deployed an AI-powered MERN stack
                      platform with an interactive React.js frontend and
                      scalable Node.js backend, ensuring efficient data flow via
                      MongoDB.
                    </li>
                    <li>
                      Integrated a custom-trained handwriting recognition model
                      (via Hugging Face) to detect dyslexia and dysgraphia,
                      enabling automated reports for users and psychiatrists.
                    </li>
                    <li>
                      Containerized the app using Docker and implemented CI/CD
                      pipelines with GitHub Actions for seamless AWS EC2
                      deployment.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  MERN Stack
                </span>
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  Docker
                </span>
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  AWS (EC2)
                </span>
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  Gemini API
                </span>
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  Open CV
                </span>
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  Hugging Face
                </span>
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  Python
                </span>
                <span className="bg-[#0F172A] text-[#CBD5E1] text-xs font-medium px-3 py-1 rounded-md">
                  Custom-Trained Handwriting Recognition Model
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Expertise Section */}
      <div id="skills" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#7B61FF]">Skills</span>
          </h2>
          <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
            Technologies and tools I leverage to build innovative solutions
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveSkillCategory(category.name)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSkillCategory === category.name
                  ? "bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/30"
                  : "bg-[#1A1D29]/50 border border-[#A3AED0]/10 text-[#CBD5E1] hover:bg-[#1A1D29]/70 hover:border-[#7B61FF]/30 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {getFilteredSkills().map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-lg text-[#CBD5E1] text-sm hover:bg-[#7B61FF] hover:border-[#7B61FF] hover:text-white transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(123,97,255,0.5)] group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                {skill.name}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div id="certifications" className="relative z-10 px-6 py-20 mt-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#7B61FF]">Certifications</span>
          </h2>
          <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
            Credentials and professional achievements
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#7B61FF] hover:border-[#7B61FF] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(123,97,255,0.5)] group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Award className="w-6 h-6 text-[#7B61FF] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {cert}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Get In Touch Section ───────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative z-10 px-6 py-20 bg-[#0F111A] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-[#7B61FF]">Touch</span>
          </h2>
          <p className="text-[#CBD5E1] text-center mb-12">
            Have a question or want to work together? I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              {/* Introduction Card */}
              <div className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#7B61FF] transition-colors duration-300">
                  Let's Connect
                </h3>
                <p className="text-[#CBD5E1] leading-relaxed group-hover:text-white transition-colors duration-300">
                  I'm currently looking for new opportunities to apply my skills
                  in full‑stack development and machine learning. Whether you
                  have a question or just want to say hi, I'll do my best to get
                  back to you!
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email Card */}
                <a
                  href="mailto:saadnadeem5509@gmail.com"
                  className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EA4335]/20 rounded-lg flex items-center justify-center group-hover:bg-[#EA4335]/30 transition-all duration-300">
                      <Mail className="w-6 h-6 text-[#EA4335] group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-sm text-[#A3AED0] group-hover:text-white transition-colors duration-300">
                        Email
                      </div>
                      <div className="text-white font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                        saadnadeem5509@gmail.com
                      </div>
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <div className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#7B61FF]/20 rounded-lg flex items-center justify-center group-hover:bg-[#7B61FF]/30 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#7B61FF] group-hover:rotate-12 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M22 16.92V19a2 2 0 01-2 2h-1a19 19 0 01-8.36-3.36A19 19 0 013.35 11.36 19 19 0 010 3V2a2 2 0 012-2h2.09a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0122 16.92z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-[#A3AED0] group-hover:text-white transition-colors duration-300">
                        Phone
                      </div>
                      <div className="text-white font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                        +92 304 9417255
                      </div>
                    </div>
                  </div>
                </div>

                {/* GitHub Card */}
                <a
                  href="https://github.com/saadnadeem07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#24292e]/20 rounded-lg flex items-center justify-center group-hover:bg-[#24292e]/30 transition-all duration-300">
                      <Github className="w-6 h-6 text-[#24292e] group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-sm text-[#A3AED0] group-hover:text-white transition-colors duration-300">
                        GitHub
                      </div>
                      <div className="text-white font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                        @saadnadeem07
                      </div>
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/saadnadeem07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1A1D29]/50 backdrop-blur-sm border border-[#A3AED0]/10 rounded-xl p-6 hover:bg-[#1A1D29]/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7B61FF]/10 hover:border-[#7B61FF]/30 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0077B5]/20 rounded-lg flex items-center justify-center group-hover:bg-[#0077B5]/30 transition-all duration-300">
                      <Linkedin className="w-6 h-6 text-[#0077B5] group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-sm text-[#A3AED0] group-hover:text-white transition-colors duration-300">
                        LinkedIn
                      </div>
                      <div className="text-white font-medium group-hover:text-[#7B61FF] transition-colors duration-300">
                        @saadnadeem07
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form
                action="mailto:saadnadeem5509@gmail.com"
                method="POST"
                encType="text/plain"
                className="flex flex-col space-y-4 max-w-md mx-auto"
              >
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-[#1A1D29] border border-[#A3AED0]/20 rounded-lg text-white placeholder-[#A3AED0]/60 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] hover:border-[#7B61FF]/30 transition-all duration-200"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-[#1A1D29] border border-[#A3AED0]/20 rounded-lg text-white placeholder-[#A3AED0]/60 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] hover:border-[#7B61FF]/30 transition-all duration-200"
                />
                <textarea
                  name="Message"
                  rows={6}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-[#1A1D29] border border-[#A3AED0]/20 rounded-lg text-white placeholder-[#A3AED0]/60 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] hover:border-[#7B61FF]/30 transition-all duration-200"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#7B61FF] hover:bg-[#6A4FE6] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#7B61FF]/25 group flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ─────────────────────────────────────────────────────────────────────────────── */}

      <footer className="bg-[#0F111A] text-gray-400 py-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Row */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-semibold text-[#B191FF] mb-2">
                Saad Nadeem
              </h3>
              <p>
                Building innovative web applications, AI solutions, and scalable
                systems using modern DevOps and Cloud technologies.
              </p>
            </div>

            {/* Right Side: Social Icons */}
            <div className="flex md:justify-end flex-col md:items-end space-y-4">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Saadnadeem07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#24292e] hover:bg-[#1b1f23] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <Github className="w-5 h-5 group-hover:text-[#7B61FF]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saadnadeem07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0077B5] hover:bg-[#005f8d] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-[#7B61FF]" />
                </a>
                <a
                  href="https://medium.com/@saadnadeem07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black hover:bg-[#333] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <svg
                    className="w-5 h-5 group-hover:text-[#7B61FF]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
                <a
                  href="https://linktr.ee/saadnadeem07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#39E09B] hover:bg-[#2bc88d] text-black font-semibold transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <FaLink className="w-5 h-5 group-hover:text-[#7B61FF]" />
                </a>
                <a
                  href="mailto:saadnadeem5509@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#EA4335] hover:bg-[#d33426] text-white transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <Mail className="w-5 h-5 group-hover:text-[#7B61FF]" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2025 Saad Nadeem. All rights reserved.</p>

            <ul className="flex gap-6 mt-4 md:mt-0 items-center">
              <li>
                <a
                  href="#about"
                  className="hover:scale-105 transition-all duration-300 hover:text-[#7B61FF] group"
                >
                  <span className="relative">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:scale-105 transition-all duration-300 hover:text-[#7B61FF] group"
                >
                  <span className="relative">
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:scale-105 transition-all duration-300 hover:text-[#7B61FF] group"
                >
                  <span className="relative">
                    Experience
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:scale-105 transition-all duration-300 hover:text-[#7B61FF] group"
                >
                  <span className="relative">
                    Skills
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:scale-105 transition-all duration-300 hover:text-[#7B61FF] group"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B61FF] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#top"
                  className="bg-[#7B61FF] text-white p-2 rounded-full hover:bg-[#6A4FE6] hover:scale-110 hover:rotate-180 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#7B61FF]/25 group"
                  title="Back to top"
                >
                  <ArrowUp className="w-4 h-4 group-hover:text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
