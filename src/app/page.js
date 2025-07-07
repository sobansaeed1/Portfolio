// app/page.js
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegCopyright, FaBars, FaTimes } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProjectTab, setSelectedProjectTab] = useState("web-dev");
  const [selectedCertificateTab, setSelectedCertificateTab] = useState("internships");
  const [activeSection, setActiveSection] = useState("about");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.title = "Soban | Portfolio";
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white font-sans px-2 sm:px-4 py-6 sm:py-10">
      {/* Navigation Bar */}
      <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[98vw] sm:w-[95vw] max-w-5xl z-50 bg-gradient-to-br from-zinc-900/80 via-zinc-800/70 to-zinc-900/80 backdrop-blur-lg shadow-2xl rounded-3xl py-3 sm:py-4 px-1 sm:px-2 flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-0">
        <div className="flex w-full md:w-auto items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/img/logo.png" alt="Soban Logo" width={80} height={80} className="rounded-full" />

          </div>
          <button className="md:hidden text-cyan-400 text-2xl p-2 focus:outline-none transition-colors duration-200 hover:bg-cyan-900/40 rounded-full" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Nav Links */}
        <div className={`w-full md:w-auto flex-col md:flex-row flex gap-1 sm:gap-2 md:gap-6 px-1 md:flex ${navOpen ? "flex" : "hidden"} md:flex md:items-center bg-zinc-900/95 md:bg-transparent rounded-2xl md:rounded-none mt-2 md:mt-0 py-4 md:py-0 transition-all duration-300 absolute md:static left-0 right-0 top-16 md:top-auto z-40 md:z-auto shadow-2xl md:shadow-none`}>
          <a href="#about" className={`relative px-4 py-2 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 group ${activeSection === "about" ? "text-white font-bold" : "text-cyan-400"}`}>
            <span className="relative z-10">About</span>
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 ${activeSection === "about" ? "w-3/4 bg-cyan-400" : "w-0"} group-hover:w-3/4 group-focus:w-3/4 bg-cyan-400 rounded-full transition-all duration-300`}></span>
          </a>
          <a href="#education" className={`relative px-4 py-2 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 group ${activeSection === "education" ? "text-white font-bold" : "text-cyan-400"}`}>
            <span className="relative z-10">Education</span>
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 ${activeSection === "education" ? "w-3/4 bg-cyan-400" : "w-0"} group-hover:w-3/4 group-focus:w-3/4 bg-cyan-400 rounded-full transition-all duration-300`}></span>
          </a>
          <a href="#skills" className={`relative px-4 py-2 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 group ${activeSection === "skills" ? "text-white font-bold" : "text-cyan-400"}`}>
            <span className="relative z-10">Skills</span>
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 ${activeSection === "skills" ? "w-3/4 bg-cyan-400" : "w-0"} group-hover:w-3/4 group-focus:w-3/4 bg-cyan-400 rounded-full transition-all duration-300`}></span>
          </a>
          <a href="#projects" className={`relative px-4 py-2 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 group ${activeSection === "projects" ? "text-white font-bold" : "text-cyan-400"}`}>
            <span className="relative z-10">Projects</span>
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 ${activeSection === "projects" ? "w-3/4 bg-cyan-400" : "w-0"} group-hover:w-3/4 group-focus:w-3/4 bg-cyan-400 rounded-full transition-all duration-300`}></span>
          </a>
          <Link href="/resume" className={`relative px-4 py-2 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 group ${activeSection === "resume" ? "text-white font-bold" : "text-cyan-400"}`}>
            <span className="relative z-10">Resume</span>
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 ${activeSection === "resume" ? "w-3/4 bg-cyan-400" : "w-0"} group-hover:w-3/4 group-focus:w-3/4 bg-cyan-400 rounded-full transition-all duration-300`}></span>
          </Link>
          <Link href="/experience" className="relative px-4 py-2 rounded-lg font-semibold text-base md:text-lg text-cyan-400 transition-all duration-200 hover:text-white focus:text-white group">
            <span className="relative z-10">Professional Experience</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-0 group-hover:w-3/4 group-focus:w-3/4 bg-cyan-400 rounded-full transition-all duration-300"></span>
          </Link>
          <Link href="/contactMe" className="relative px-4 py-2 rounded-lg font-semibold text-base md:text-lg text-cyan-400 transition-all duration-200 hover:text-white focus:text-white group">
            <span className="relative z-10">Contact Me</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-0 group-hover:w-3/4 group-focus:w-3/4 bg-cyan-400 rounded-full transition-all duration-300"></span>
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="mt-5 flex flex-col items-center justify-center min-h-[80vh] sm:min-h-screen text-center relative pt-20 sm:pt-0" style={{ scrollMarginTop: '80px' }}>
        <div className="relative z-10 mb-0">
          <div className="bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 p-1.5 sm:p-2 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 aspect-square">
            <Image
              src="/img/soban.jpeg"
              alt="Soban Saeed profile photo"
              width={160}
              height={160}
              className="rounded-full object-cover aspect-square border-4 sm:border-8 border-zinc-900 shadow-2xl w-32 h-32 sm:w-[220px] sm:h-[220px]"
              priority
            />
          </div>
        </div>
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-4 sm:mb-6 mt-10 sm:mt-20 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Soban Saeed
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl md:text-3xl text-cyan-200 mb-6 sm:mb-8 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Full Stack Developer | UI/UX Enthusiast | Cloud Explorer
        </motion.p>
        <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl mb-8 sm:mb-10">
          <a href="https://github.com/unethicalHacker1/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-soban-2979a231a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://medium.com/@sobansaeed21" target="_blank" rel="noopener noreferrer">
            <SiMedium className="hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="mailto:sobansaeed21@gmail.com">
            <FaEnvelope className="hover:text-cyan-400 transition duration-300" />
          </a>
        </div>
        {/* Scroll Indicator */}
        <a href="#main-content" className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-cyan-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>
      {/* About Section */}
      <div id="main-content">
        <section id="about" className="w-full my-12 sm:my-24 px-2 sm:px-6 md:px-16" style={{ scrollMarginTop: '80px' }}>
          <motion.div
            className="bg-zinc-900 rounded-2xl shadow-lg p-4 sm:p-8 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4">About Me</h2>
            <p className="text-zinc-300 text-base sm:text-lg">
              I’m a passionate and self-driven Web Developer with a strong foundation in building dynamic, responsive, and user-focused web applications using modern technologies like JavaScript, React, Next.js, Node.js, and Express. With hands-on experience in both frontend and backend development, I enjoy crafting seamless digital experiences that are not only functional but also visually engaging.

              During my academic journey at FAST-NUCES and through internships like my role at Optimum Tech, I’ve developed and contributed to multiple real-world projects—from AI-assisted health platforms to scalable ticketing systems and full-stack cloud deployments. I thrive in collaborative environments and continuously explore new technologies to improve both performance and usability in my work.

              Driven by curiosity and precision, I focus on writing clean code, optimizing performance, and delivering value through every project I take on.
            </p>
          </motion.div>
        </section>
      </div>
      {/* Education Section */}
      <section id="education" className="w-full my-12 sm:my-24 px-2 sm:px-6 md:px-16" style={{ scrollMarginTop: '80px' }}>
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-lg p-4 sm:p-8 mx-auto flex flex-col items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4 uppercase tracking-wide">Education</h2>
          <div className="w-full border-b border-cyan-700/40 mb-4"></div>
          {/* Entry 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between mb-2">
            <div className="text-zinc-200 text-lg sm:text-xl font-semibold">Bachelor in Computer Science</div>
            <div className="text-zinc-400 text-base sm:text-lg mt-1 sm:mt-0">2021 - 2025</div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between mb-4">
            <div className="text-cyan-300 text-base sm:text-lg font-semibold">FAST-NUCES</div>
          </div>
          <div className="w-full border-b border-cyan-700/20 mb-4"></div>
          {/* Entry 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between mb-2">
            <div className="text-zinc-200 text-lg sm:text-xl font-semibold">Intermediate in Pre-Engineering</div>
            <div className="text-zinc-400 text-base sm:text-lg mt-1 sm:mt-0">2019 - 2021</div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between mb-4">
            <div className="text-cyan-300 text-base sm:text-lg font-semibold">Punjab College, Faisalabad</div>
          </div>
          <div className="w-full border-b border-cyan-700/20 mb-4"></div>
          {/* Entry 3 */}
          <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between mb-2">
            <div className="text-zinc-200 text-lg sm:text-xl font-semibold">Matriculation in Science</div>
            <div className="text-zinc-400 text-base sm:text-lg mt-1 sm:mt-0">2017 - 2019</div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between">
            <div className="text-cyan-300 text-base sm:text-lg font-semibold">Divisional Model School, Faisalabad</div>
          </div>
        </motion.div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="w-full my-12 sm:my-24 px-2 sm:px-6 md:px-16" style={{ scrollMarginTop: '80px' }}>
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-lg p-4 sm:p-8 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4">Technical Skills</h2>
          <ul className="list-disc pl-4 sm:pl-6 text-zinc-300 text-base sm:text-lg space-y-1">
            <li><b>Languages:</b> C, C++, Java, C#, JavaScript, Python, SQL, HTML, CSS, Bootstrap, PHP, Dart, Bash Scripting, Assembly</li>
            <li><b>Frameworks:</b> Next.js, React, Node/Express, Flutter</li>
            <li><b>Libraries:</b> Bootstrap/Tailwind, Pandas, NumPy, Matplotlib, Seaborn, OS, OpenCV</li>
            <li><b>Tools:</b> VS Code, PyCharm, Google Cloud Platform, MySQL, ArcGIS 10.8, Figma, IntelliJ IDEA, Ubuntu, Eclipse, Cursor, Android Studio, Cisco Packet Tracer, Visual Studio, Arduino, Jupyter Notebook, MS Office360</li>
          </ul>
        </motion.div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="w-full my-12 sm:my-24 px-2 sm:px-6 md:px-16" style={{ scrollMarginTop: '80px' }}>
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-lg p-4 sm:p-8 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4">Projects</h2>
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSelectedProjectTab("web-dev")}
              className={`px-5 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none ${selectedProjectTab === "web-dev" ? "bg-cyan-500 text-white shadow" : "bg-cyan-900/40 text-cyan-300 hover:bg-cyan-500/30 hover:text-white"}`}
            >
              Web Development
            </button>
            <button
              onClick={() => setSelectedProjectTab("cloud")}
              className={`px-5 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none ${selectedProjectTab === "cloud" ? "bg-cyan-500 text-white shadow" : "bg-cyan-900/40 text-cyan-300 hover:bg-cyan-500/30 hover:text-white"}`}
            >
              Cloud Computing
            </button>
          </div>
          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {selectedProjectTab === "web-dev" && (
              <motion.div
                key="web-dev"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                className="flex flex-col gap-8"
              >
                {/* Health Nexus Project */}
                <div className="bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-200 mb-2">Health Nexus (Final Year Project)</h4>
                  <div className="text-cyan-400 text-sm mb-2">Next.js, PostgreSQL, JWT, Python, AI</div>
                  <ul className="list-disc pl-5 text-zinc-300 text-base space-y-1">
                    <li>Developed a platform connecting patients to NGOs and pharmaceutical companies for financial and medical assistance.</li>
                    <li>Implemented AI-powered chatbot for initial medical assistance.</li>
                    <li>Integrated real-time communication and comprehensive analytics.</li>
                  </ul>
                </div>
                {/* Airline Ticketing Web Application */}
                <div className="bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-200 mb-2">Airline Ticketing Web Application</h4>
                  <div className="text-cyan-400 text-sm mb-2">HTML, CSS, Bootstrap, JavaScript, Node.js/Express.js, MVC Architecture</div>
                  <ul className="list-disc pl-5 text-zinc-300 text-base space-y-1">
                    <li>Developed a web-based airline ticket booking system with flight search, seat selection, and booking confirmation features.</li>
                  </ul>
                </div>
                {/* Portfolio Project */}
                <div className="bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-200 mb-2">Personal Portfolio Website</h4>
                  <div className="text-cyan-400 text-sm mb-2">Next.js, React, Tailwind CSS, Framer Motion</div>
                  <ul className="list-disc pl-5 text-zinc-300 text-base space-y-1">
                    <li>Designed and developed a modern, responsive portfolio to showcase my projects, skills, and professional experience.</li>
                    <li>Implemented smooth animations, a contact form, and dynamic sections for a seamless user experience.</li>
                    <li>Continuously improved based on feedback and new web development trends.</li>
                  </ul>
                </div>
              </motion.div>
            )}
            {selectedProjectTab === "cloud" && (
              <motion.div
                key="cloud"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                className="flex flex-col gap-8"
              >
                {/* Dynamic Website Deployment on Cloud */}
                <div className="bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-200 mb-2">Dynamic Website Deployment on Cloud</h4>
                  <div className="text-cyan-400 text-sm mb-2">GCP, Apache, Ubuntu</div>
                  <ul className="list-disc pl-5 text-zinc-300 text-base space-y-1">
                    <li>Hosted a dynamic college website on Google Cloud Platform using Apache server and MySQL database.</li>
                    <li>Configured VM instances, set up a LAMP stack, imported SQL data, and enabled persistent public access via external IP.</li>
                  </ul>
                </div>
                {/* Cloud-Based Media Streaming Server */}
                <div className="bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-200 mb-2">Cloud-Based Media Streaming Server</h4>
                  <div className="text-cyan-400 text-sm mb-2">GCP, Apache, Ubuntu</div>
                  <ul className="list-disc pl-5 text-zinc-300 text-base space-y-1">
                    <li>Deployed a Linux-based media streaming server on Google Cloud Platform using Apache HTTP Server.</li>
                    <li>Configured firewall rules, enabled SSH and RDP access, ensured public media availability, and achieved persistent web hosting.</li>
                  </ul>
                </div>
                {/* Automated Cloud Storage & Monitoring */}
                <div className="bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-200 mb-2">Automated Cloud Storage & Monitoring</h4>
                  <div className="text-cyan-400 text-sm mb-2">Kubernetes, Docker, Sensu, Python, RAID 5, OS</div>
                  <ul className="list-disc pl-5 text-zinc-300 text-base space-y-1">
                    <li>Configured a six-node mini cloud infrastructure with automated storage and real-time monitoring using Sensu.</li>
                    <li>Developed remote execution scripts for failure recovery and real-time dashboard visualization.</li>
                    <li>Implemented RAID 5 for distributed image storage and recovery, ensuring fault tolerance.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>



      <footer className="w-full mt-16 sm:mt-24">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-800/70 to-zinc-900/80 shadow-2xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
            <span className="text-2xl font-extrabold text-cyan-400 mb-1">Soban Saeed</span>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <FaEnvelope className="text-cyan-400" /> sobansaeed21@gmail.com
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <FaPhoneAlt className="text-cyan-400" /> +92 303 6394110
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <FaMapMarkerAlt className="text-cyan-400" /> Faisalabad, Pakistan
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-cyan-400 mb-1">Quick Links</span>
            <div className="flex flex-col md:flex-row md:gap-6 gap-2 flex-wrap justify-center items-center">
              <a href="#about" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-colors">About</a>
              <a href="#education" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-colors">Education</a>
              <a href="#skills" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-colors">Projects</a>
              <a href="#resume" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-colors">Resume</a>
              <Link href="/experience" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-colors">Professional Experience</Link>
              <Link href="/contactMe" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-colors">Contact Me</Link>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-cyan-400 mb-1">Connect</span>
            <div className="flex gap-4 text-2xl">
              <a href="https://github.com/unethicalHacker1/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/muhammad-soban-2979a231a/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
              <a href="https://medium.com/@sobansaeed21" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><SiMedium /></a>
              <a href="mailto:sobansaeed21@gmail.com" className="hover:text-cyan-400 transition-colors"><FaEnvelope /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-zinc-500 text-xs mt-4 sm:mt-6 flex items-center justify-center gap-1">
          <FaRegCopyright /> {new Date().getFullYear()} Soban Saeed. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
