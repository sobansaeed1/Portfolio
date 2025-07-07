"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaFilePdf } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

// Example certificate data (replace with your own)
const certificates = {
  internships: [
    {
      title: "Web Development Intern",
      company: "Nexium Global Ltd",
      location: "Lahore, Pakistan",
      duration: "July 2025 – Ongoing",
      points: [
        "Selected for Nexium's official internship program focused on real-world web development projects. Participated in onboarding, collaborative team learning, and internal project-based training environments."
      ]
    },
    {
      title: "Junior Flutter Developer Intern",
      company: "OPTIMUM TECH",
      location: "Faisalabad, Pakistan",
      duration: "June 2023 – August 2023",
      points: [
        "Contributed to Flutter app development as part of a 2-month internship program."
      ]
    }
  ],
  jobs: [

  ],
};

export default function CertificatesPage() {
  const [selectedTab, setSelectedTab] = useState("internships");

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-5xl flex justify-start mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <FaArrowLeft className="text-lg" />
          Go to Home Page
        </Link>
      </div>
      <div className="bg-zinc-900 rounded-2xl shadow-lg p-8 w-full max-w-5xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">Professional Experience</h1>
        {/* Tabbed menu */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setSelectedTab("internships")}
            className={`px-5 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none ${selectedTab === "internships" ? "bg-cyan-500 text-white shadow" : "bg-cyan-900/40 text-cyan-300 hover:bg-cyan-500/30 hover:text-white"}`}
          >
            Internships
          </button>
          <button
            onClick={() => setSelectedTab("jobs")}
            className={`px-5 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none ${selectedTab === "jobs" ? "bg-cyan-500 text-white shadow" : "bg-cyan-900/40 text-cyan-300 hover:bg-cyan-500/30 hover:text-white"}`}
          >
            Jobs
          </button>
        </div>
        {/* Certificates cards with animation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {certificates[selectedTab].map((cert, idx) => (
              cert.company && cert.location && cert.duration && cert.points ? (
                <div key={idx} className="bg-zinc-800 rounded-xl shadow-md p-8 flex flex-col items-center w-full max-w-3xl mx-auto mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 w-full mb-2 text-base md:text-lg font-extrabold text-cyan-300 text-center gap-2">
                    <span>{cert.title}</span>
                    <span>{cert.company}</span>
                    <span>{cert.location}</span>
                    <span>{cert.duration}</span>
                  </div>
                  <hr className="w-full border-cyan-500 mb-2" />
                  <ul className="list-disc text-zinc-300 text-left w-full pl-6">
                    {cert.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={idx} className="bg-zinc-800 rounded-xl shadow-md p-8 flex flex-col items-center w-full max-w-3xl mx-auto mb-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center w-full">{cert.title}</h3>
                  <p className="text-zinc-300 mb-4 text-center whitespace-pre-line w-full text-lg leading-relaxed">{cert.description}</p>
                </div>
              )
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
